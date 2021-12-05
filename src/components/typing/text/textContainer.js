import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { textToResultText } from "reducers/text/text";

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

    //
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
            <div class="typing__text typing__text--sentence">
                <div>{printResultText()}</div>
                <a id="nextSentence">{nextText}</a>
            </div>
        )
    } else if (mode == "word") {
        return (
            <div class="typing__text typing__text--word">
                <a class="wordnow">{printResultText()}</a>
            </div>
        )
    } else if (mode == "longText") {
        return (
            <div class="typing__text typing__text--long-text">
                <div>{printResultText()}</div>
                <div class="typing__page-count">{pageIndex + 1}/{pageCount}</div>
            </div>
        )
    }
}

export default TextContainer;