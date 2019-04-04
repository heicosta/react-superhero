import {DETAIL_HERO, FETCH_HERO} from '../actions/types';

export default function heroReducer(state = { heroes: [], hero: {} }, action) {
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
    default:
      return state;
  }
}