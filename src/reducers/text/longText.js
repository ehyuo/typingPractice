const SET = "longText/SET";
const SETTITLE = "longText/SETTITLE";
const TURN = "longText/TURN";
const RESET = "longText/RESET";

export const setLongTextTitle = (longTextTitle) => ({ type: SETTITLE, longTextTitle: longTextTitle});
export const setLongTextContent = (longTextContent, pageCount) => ({ type: SET, longTextContent: longTextContent, pageCount: pageCount });
export const turnPage = () => ({ type: TURN });
export const resetPageCount = () => ({ type: RESET });

const initState = {
    longTextTitle: "",
    longTextContent: [],
    pageIndex: 0,
    pageCount: 0,
}

const longText = (state = initState, actions) => {
    switch (actions.type) {
        case SETTITLE:
            return state = {
                ...state,
                longTextTitle: actions.longTextTitle
            }
        case SET:
            return state = {
                ...state,
                longTextContent: actions.longTextContent,
                pageIndex: 0,
                pageCount: actions.pageCount
            }
        case TURN:
            return state = {
                ...state,
                pageIndex: state.pageIndex + 1
            }
        case RESET:
            return state = {
                ...state,
                longTextTitle: "",
                longTextContent: "",
                pageIndex: 0,
                pageCount: 0
            }
        default:
            return state;
    }
}

export default longText;