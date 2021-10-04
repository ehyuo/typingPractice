const INCREASE = 'progress/INCREASE';
const SET = 'progress/SET';
const RESET = 'progress/RESET';
const FINISH = 'progress/FINISH';

export const setGoalProgress = (goalProgress) => ({ type: SET, goalProgress: goalProgress });
export const resetTypingProgress = () => ({ type: RESET });
export const increaseTypingProgress = (progress) => ({ type: INCREASE, progress: progress });
export const setFinished = () => ({ type: FINISH });

const initState = {
    progress: 0,
    goalProgress: 1,
    isFinished: false
}

const typingProgress = (state = initState, actions) => {
    switch (actions.type) {
        case INCREASE:
            return state = {
                ...state,
                progress: state.progress + 1
            };
        case SET:
            return state = {
                ...state,
                goalProgress: actions.goalProgress
            };
        case RESET:
            return state = {
                ...state,
                progress: 0
            }
        case FINISH:
            return state = {
                ...state,
                isFinished: !state.isFinished
            }
        default:
            return state;
    }
}

export default typingProgress;
