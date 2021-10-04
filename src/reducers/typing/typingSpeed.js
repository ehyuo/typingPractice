import { createAction, createReducer } from '@reduxjs/toolkit';

const SET = 'typingSpeed/SET';
const INSERT = 'typingSpeed/INSERT';
const RESET = "typingSpeed/RESET";

export const setTypingSpeed = (speed) => ({ type: SET, speed: speed})
export const insertTypingSpeed = () => ({ type: INSERT });
export const resetTypingSpeed = () => ({ type: RESET });



const initState = {
    speed: 0,
    lastSpeed: 0,
    speedList: []
}

const typingSpeed = (state = initState, actions) => {
    switch(actions.type){
        case SET:
            return state = {
                ...state,
                speed: actions.speed
            }
        case INSERT:
            return state = {
                ...state,
                lastSpeed: state.speed,
                speedList: [...state.speedList, state.speed]
            }
        case RESET:
            return state = {
                ...state,
                speed: 0,
                lastSpeed: 0,
                speedList: []
            }
        default:
            return state;
    }
}

export default typingSpeed;
