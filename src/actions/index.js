import {ADD_POST, DELETE_POST, DETAIL_HERO, FAVORITE_HERO, FETCH_HERO, FETCH_POST} from './types';
import axios from 'axios';

// super-heroes mongo-database
const apiUrl = 'http://localhost:heroes/heroes';

// super-hero api
const superHeroApiAccessToken = '2282843265370971';
const superHeroApiUrl = `https://superheroapi.com/api/${superHeroApiAccessToken}`;

export const favoriteHero = (hero) => {
  return {
    type: FAVORITE_HERO,
    hero
  }
};

export const heroFavorite = (hero) => {
  return (dispatch) => {
    dispatch(favoriteHero(hero));
  }
};

export const detailHero = (hero) => {
  return {
    type: DETAIL_HERO,
    hero
  }
};

export const heroDetail = (hero) => {
  return (dispatch) => {
    dispatch(detailHero(hero));
  }
};

export const fetchHeroes = (heroes) => {
  return {
    type: FETCH_HERO,
    heroes
  }
};

export const fetchAllHeroes = () => {

  return (dispatch) => {

    function buildAxiosGet(heroUrl) {
      return axios({
        method: "GET",
        url: "https://proxy.hackeryou.com",
        dataResponse: "json",
        params: { reqUrl: heroUrl },
        xmlToJSON: false
      });
    }

    let heroesPromises = [],
        heroesList = [],
        heroesIds = [ '107', '346', '332', '659', '149' ];

    heroesIds.forEach(function(heroId){
      let heroUrl = `${superHeroApiUrl}/${heroId}`;
      heroesPromises.push(buildAxiosGet(heroUrl))
    });

    axios.all(heroesPromises).then(function(heroes) {
      heroes.forEach(function(response) {
        heroesList.push(response.data);
      });

      dispatch(fetchHeroes(heroesList));
    });
  };
};


// TODO remove
export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
};

export const deletePost = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
