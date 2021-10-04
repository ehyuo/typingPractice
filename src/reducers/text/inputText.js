const SET = "inputText/SET";
const RESET = "inputText/RESET"
export const setInputText = (inputText) => ({ type: SET, inputText: inputText });
export const resetInputText = (inputText) => ({ type: RESET, inputText: inputText });

const initState = {
    inputText: ""
}

const inputText = (state = initState, actions) => {
    switch (actions.type) {
        case SET:
            return state = {
                ...state,
                inputText: actions.inputText
            };
        case RESET:
            return state = {
                ...state,
                inputText: ""
            }
        default:
            return state;
    }
}

export default inputText;
