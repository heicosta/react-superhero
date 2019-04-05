import {DETAIL_HERO, FETCH_HERO, FETCH_FAVORITES, FAVORITE_HERO, UNFAVORITE_HERO} from '../actions/types';

export default function heroReducer(state = { heroes: [], hero: {}, favorites: [] }, action) {
  switch (action.type) {
    case FETCH_HERO:
      return {
        ...state.heroes,
        heroes: action.heroes
      };
    case DETAIL_HERO:
      return {
        ...state,
        hero: action.hero
      };
    case FETCH_FAVORITES:
      return {
        ...state.heroes.favorites,
        favorites: action.favorites !== undefined ? action.favorites : []
      };
    case FAVORITE_HERO:
      return {
        ...state,
        hero: {},
        favorites: state.favorites !== undefined ? state.favorites.concat(action.hero) : [action.hero]
      };
    case UNFAVORITE_HERO:
      return {
        ...state,
        hero: {},
        favorites: state.favorites.slice(state.favorites.indexOf(action.hero))
        //,
        //favorites: [ action.hero ]
      };
    default:
      return state;
  }
}