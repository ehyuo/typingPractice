const SET = 'accuracy/SET';
const INSERT = "accuracy/INSERT";
const RESET = "accuracy/RESET"

export const setTypingAccuracy = (accuracy) => ({ type: SET, accuracy: accuracy });
export const insertTypingAccuracy = () => ({ type: INSERT });
export const resetTyipingAccuracy = () => ({ type: RESET });

const initState = {
    accuracy: 0,
    accuracyList: []
}

const typingAccuracy = (state = initState, actions) => {
    switch (actions.type) {
        case SET:
            return state = {
                ...state,
                accuracy: actions.accuracy,

            };
        case INSERT:
            return state = {
                ...state,
                accuracyList: [...state.accuracyList, state.accuracy]
            }
        case RESET:
            return state = {
                ...state,
                accuracy: 0,
                accuracyList: []
            }
        default:
            return state;
    }
}

export default typingAccuracy;
