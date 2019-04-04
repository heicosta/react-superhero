import { combineReducers } from 'redux';
import posts from './postReducer';
import heroes from './heroReducer';

export default combineReducers({
    heroes: heroes
});