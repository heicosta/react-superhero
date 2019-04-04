import {DETAIL_HERO, FETCH_HERO} from '../actions/types';

export default function heroReducer(state = [], action) {
  switch (action.type) {
    case FETCH_HERO:
      return action.heroes;
    case DETAIL_HERO:
      return action.hero;
    default:
      return state;
  }
}