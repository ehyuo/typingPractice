const SET_TEXT = "text/SET_TEXT";
const SET_NEXTTEXT = "text/SET_NEXTTEXT";
const SET_RESULTTEXT = "text/SET_RESULTTEXT";

const SET_WORDLIST = "text/SET_WORDLIST";
const SET_SENTENCELIST = "text/SET_SENTENCELIST";

const TO_TEXT = "text/TO_TEXT";
const TO_RESULTTEXT = "text/TO_RESULTTEXT"
const RESET = "text/RESET";

export const setText = (text) => ({ type: SET_TEXT, text: text });
export const setNextText = (nextText) => ({ type: SET_NEXTTEXT, nextText: nextText });
export const setResultText = (resultText) => ({ type: SET_RESULTTEXT, resultText: resultText });

export const setSentenceList = (sentenceList) => ({ type: SET_SENTENCELIST, sentenceList: sentenceList });
export const setWordList = (wordList) => ({ type: SET_WORDLIST, wordList: wordList });

export const nextTextToText = () => ({ type: TO_TEXT });
export const textToResultText = () => ({ type: TO_RESULTTEXT });
export const resetText = (text) => ({ type: RESET, text: text });



const initState = {
    sentenceList: [],
    wordList: [],
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
        case SET_SENTENCELIST: 
            return state = {
                ...state,
                sentenceList: actions.sentenceList
            }
        case SET_WORDLIST: 
            return state = {
                ...state,
                wordList: actions.wordList
            }
        case TO_TEXT:
            return state = {
                ...state,
                text: state.nextText
            }
        case TO_RESULTTEXT:
            return state = {
                ...state,
                resultText: typeof state.text == "string" ? state.text.split('').map((row, idx) => {
                    if(idx == 0) return ({ differ: "last", letter: row });
                    else return ({ differ: "yet", letter: row });
                }) : null
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
