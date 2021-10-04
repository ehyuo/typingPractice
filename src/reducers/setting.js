const LOADING = "setting/LOADING";
const SETTING = "setting/SETTING";
const LANGUAGE = "setting/LANGUAGE";
const MODE = "setting/MODE";
const CONTENT = "setting/CONTENT";

export const setSetting = () => ({ type: SETTING });
export const setLanguage = (language) => ({ type: LANGUAGE, language: language});
export const setMode = (mode) => ({ type: MODE, mode: mode});
export const setContent = (content) => ({ type: CONTENT, content: content });
export const setLoading = (isLoading) => ({ type: LOADING, isLoading: isLoading });

const initState = {
    isSetting: true,
    isLoading: false,
    language: "english",
    mode: "sentence",
    content: {}
}

const setting = (state = initState, actions) => {
    switch (actions.type) {
        case SETTING: 
            return state = {
                ...state,
                isSetting: !state.isSetting
            }
        case LANGUAGE:
            return state = {
                ...state,
                language: actions.language
            };
        case MODE:
            return state = {
                ...state,
                mode: actions.mode
            }
        case CONTENT:
            return state = {
                ...state,
                content: actions.content
            }
        case LOADING:
            return state = {
                ...state,
                isLoading: actions.isLoading
            }
        default:
            return state;
    }
  }

export default setting;