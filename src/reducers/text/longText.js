const SET = "longText/SET";
const TURN = "longText/TURN";

export const setLongTextContent = (longTextContent, pageCount) => ({ type: SET, longTextContent: longTextContent, pageCount: pageCount });
export const turnPage = () => ({ type: TURN });

const initState = {
    longTextContent: [],
    pageIndex: 0,
    pageCount: 0,
}

const longText = (state = initState, actions) => {
    switch (actions.type) {
        case SET:
            return state = {
                ...state,
                longTextContent: actions.longTextContent,
                pageCount: actions.pageCount
            }
        case TURN:
            return state = {
                ...state,
                pageIndex: state.pageIndex + 1
            }
        default:
            return state;
    }
}

export default longText;