import { combineReducers } from 'redux'

import { difficultyReducer } from './difficultyReducer';

const createReducer = combineReducers({difficultyReducer});

export default createReducer;