const MODE = "pageMode/MODE";

export const setPageMode = (pageMode) => ({ type: MODE, pageMode: pageMode });

const initState = {
    pageMode: "index"
}

const pageMode = (state = initState, actions) => {
    switch (actions.type) {
        case MODE:
            return state = {
                ...state,
                pageMode: actions.pageMode
            };
        default:
            return state;
    }
}

export default pageMode;