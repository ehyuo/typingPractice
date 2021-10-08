import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sentence from './sentence';
import Word from './word';
import LongText from './longText';


import { textToResultText } from "../../reducers/text/text";

import "./text.css";

const TextContainer = (props) => {
    const dispatch = useDispatch();

    //text
    const { text, nextText, resultText } = useSelector(state => ({
        text: state.text.text,
        nextText: state.text.nextText,
        resultText: state.text.resultText
    }))

    //page
    const { pageIndex, pageCount } = useSelector(state => ({
        pageIndex: state.longText.pageIndex,
        pageCount: state.longText.pageCount
    }));

    //else
    const mode = useSelector(state => state.setting.mode);

    useEffect(() => {
        dispatch(textToResultText());
    }, [text]);

    const printResultText = () => {
        return (
            resultText.map((row, idx) => {
                if (row.differ == true) {
                    return (<a style={{ color: "#469536" }}>{row.letter}</a>);
                } else if (row.differ == false) {
                    return (<a style={{ color: "#ff5232" }}>{row.letter}</a>);
                } else {
                    return (<a>{text.split('')[idx]}</a>);
                }
            })
        );
    }

      
    if (mode == "sentence") {
        return (
            <div>
                <Sentence
                    printResultText={printResultText()}
                    text={text}
                    nextSentence={nextText}>
                </Sentence>
            </div>
        )
    } else if (mode == "word") {
        return (
            <Word
                printResultText={printResultText()}
                text={text}
                nextWord={nextText}>
            </Word>
        )
    } else if (mode == "longText") {
        return (
            <LongText
                printResultText={printResultText()}
                text={text}
                pageIndex={pageIndex}
                pageCount={pageCount}>
            </LongText>
        )
    }
}

export default TextContainer;