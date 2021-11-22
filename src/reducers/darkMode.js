const MODE = "darkMode/MODE";

export const setIsDarkMode = (isDarkMode) => ({ type: MODE, isDarkMode: isDarkMode });

const initState = {
    isDarkMode: true
}

const darkMode = (state = initState, actions) => {
    switch (actions.type) {
        case MODE:
            return state = {
                ...state,
                isDarkMode: actions.isDarkMode
            };
        default:
            return state;
    }
}

export default darkMode;