const SET = "underbarPos/SET";

export const setUnderbarPos = (x, y) => ({ type: SET, x: x, y: y });

const initState = {
    x: 302,
    y: 208
}

const underbarPos = (state = initState, actions) => {
    switch (actions.type) {
        case SET:
            return state = {
                ...state,
                x: actions.x,
                y: actions.y
            };
        
        default:
            return state;
    }
}

export default underbarPos;
