import {DETAIL_HERO, FETCH_HEROES, FETCH_FAVORITES, FAVORITE_HERO, UNFAVORITE_HERO} from '../actions/types';

export default function heroReducer(state = { heroes: [], hero: {}, favorites: [] }, action) {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state.heroes,
        heroes: action.heroes
      };
    case DETAIL_HERO:
      return {
        ...state,
        hero: state.hero === undefined ? action.hero : undefined
      };
    case FETCH_FAVORITES:
      return {
        ...state.heroes.favorites,
        favorites: action.favorites !== undefined
            ? action.favorites
            : []
      };
    case FAVORITE_HERO:
      return {
        ...state,
        hero: {},
        favorites: state.favorites !== undefined
            ? state.favorites.indexOf(action.hero) < 0
                ? [ ...state.favorites, action.hero ]
                : [ ...state.favorites ]
            : [ action.hero ]
      };
    case UNFAVORITE_HERO:
      return {
        ...state,
        favorites: [
            ...state.favorites.slice(0, state.favorites.indexOf(action.hero)),
            ...state.favorites.slice(state.favorites.indexOf(action.hero) + 1)
        ]
      };
    default:
      return state;
  }
}