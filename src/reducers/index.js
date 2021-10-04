import { combineReducers } from "redux";

import typingSpeed from "./typing/typingSpeed";
import typingProgress from "./typing/typingProgress";
import typingAccuracy from "./typing/typingAccuracy";
import typingBackspace from "./typing/typingBackspace";


import text from "./text/text";
import inputText from "./text/inputText";
import longText from "./text/longText";


import interval from "./interval";
import setting from './setting';
import pageMode from "./pageMode";
import fold from "./fold";

export const reducer = combineReducers({
    typingSpeed,
    typingProgress,
    typingAccuracy,
    typingBackspace,

    text,
    inputText,
    longText,

    interval,
    setting,
    pageMode,
    fold
})