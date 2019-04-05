import {ADD_POST, DELETE_POST, DETAIL_HERO, FAVORITE_HERO, UNFAVORITE_HERO, FETCH_FAVORITES, FETCH_HEROES, FETCH_POST} from './types';
import axios from 'axios';

// super-heroes mongo-database
const apiUrl = 'http://localhost:heroes/heroes';

// super-hero api
const superHeroApiAccessToken = '2282843265370971';
const superHeroApiUrl = `https://superheroapi.com/api/${superHeroApiAccessToken}`;

export const unfavoriteHero = (hero) => {
  return {
    type: UNFAVORITE_HERO,
    hero
  }
};

export const heroUnfavorite = (hero) => {
  return (dispatch) => {
    dispatch(unfavoriteHero(hero));
  }
};

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
    type: FETCH_HEROES,
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

export const fetchFavoritesHeroes = (favorites) => {
  return {
    type: FETCH_FAVORITES,
    favorites
  }
};

export const fetchAllFavoriteHeroes = (favorites) => {
  return (dispatch) => {
    dispatch(fetchFavoritesHeroes(favorites));
  }
};