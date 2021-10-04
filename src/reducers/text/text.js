const SET_TEXT = "text/SET_TEXT";
const SET_NEXTTEXT = "text/SET_NEXTTEXT";
const SET_RESULTTEXT = "text/SET_RESULTTEXT";

const TO_TEXT = "text/TO_TEXT";
const TO_RESULTTEXT = "text/TO_RESULTTEXT"
const RESET = "text/RESET";

export const setText = (text) => ({ type: SET_TEXT, text: text });
export const setNextText = (nextText) => ({ type: SET_NEXTTEXT, nextText: nextText });
export const setResultText = (resultText) => ({ type: SET_RESULTTEXT, resultText: resultText });


export const nextTextToText = () => ({ type: TO_TEXT });
export const textToResultText = () => ({ type: TO_RESULTTEXT });
export const resetText = (text) => ({ type: RESET, text: text });



const initState = {
    text: "",
    nextText: "",
    resultText: [],
}

const text = (state = initState, actions) => {
    switch (actions.type) {
        case SET_TEXT:
            return state = {
                ...state,
                text: actions.text
            };
        case SET_NEXTTEXT:
            return state = {
                ...state,
                nextText: actions.nextText
            }
        case SET_RESULTTEXT:
            return state = {
                ...state,
                resultText: actions.resultText 
            }
        case TO_TEXT:
            return state = {
                ...state,
                text: state.nextText
            }
        case TO_RESULTTEXT:
            return state = {
                ...state,
                resultText: state.text.split('').map((row) => {
                    return ({ differ: "yet", letter: row });
                })
            }
        case RESET:
            return state = {
                ...state,
                text: "",
                nextText: ""
            }
        default:
            return state;
    }
}

export default text;
