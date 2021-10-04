const INCREASE = "typingBackspace/INCREASE";
const RESET = "typingBackspace/RESET";

export const increaseBackSpace = () => ({ type: INCREASE });
export const resetBackSpace = () => ({ type: RESET });

const initState = {
    backspaceCount: 0
}

const typingBackspace = (state = initState, actions) => {
    switch (actions.type) {
        case INCREASE:
            return state = {
                ...state,
                backspaceCount: state.backspaceCount + 1
            }
        case RESET:
            return state = {
                ...state,
                backspaceCount: 0
            }
        default:
            return state;
    }
}

export default typingBackspace;