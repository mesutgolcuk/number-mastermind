import { SET_DIFFICULTY } from './actionTypes'

export function setDifficulty(difficulty: number) {
    return {
        type: SET_DIFFICULTY,
        difficulty
    }
}

