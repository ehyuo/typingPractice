const FOLDED = "fold/FOLDED";

export const setIsFolded = (isFolded) => ({ type: FOLDED, isFolded: isFolded });

const initState = {
    isFolded: false
}

const fold = (state = initState, actions) => {
    switch (actions.type) {
        case FOLDED:
            return state = {
                ...state,
                isFolded: actions.isFolded
            };
        default:
            return state;
    }
}

export default fold;