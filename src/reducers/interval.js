const RUNNING = "interval/SETRUNNING";
const TYPINGCOUNT = "interval/SETTYPINGCOUNT";
const INCREASE = "interval/INCREASE";
const RESET = "interval/RESET";

export const setIsRunning = (isRunning) => ({ type: RUNNING, isRunning: isRunning });
export const setTypingCount = (typingCount) => ({ type: TYPINGCOUNT, typingCount: typingCount });
export const resetInterval = () => ({ type: RESET });
export const increaseTimeCount = () => ({ type: INCREASE });

const initState = {
    delay: 100,
    isRunning: false,
    typingCount: 0,
    timeCount: 1,
}

const interval = (state = initState, actions) => {
    switch (actions.type) {
        case RUNNING:
            return state = {
                ...state,
                isRunning: actions.isRunning
            };
        case TYPINGCOUNT:
            return state = {
                ...state,
                typingCount: actions.typingCount
            };
        case INCREASE:
            return state = {
                ...state,
                timeCount: state.timeCount+1
            }
        case RESET:
            return state = {
                ...state,
                isRunning: false,
                typingCount: 0,
                timeCount: 1
            }
        default:
            return state;
    }
}

export default interval;