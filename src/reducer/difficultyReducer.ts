import { SET_DIFFICULTY } from '../actions/actionTypes';

import DifficultyTypes from '../containers/Game/difficultyTypes';

const initialState = {
    difficulty: DifficultyTypes.EASY
};

export function difficultyReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_DIFFICULTY:
            return Object.assign({}, state, {
                difficulty: action.difficulty
            })
        default:
            return state;
    }
}
