import React, { useEffect, useState, useRef } from 'react';
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
    const { pageIndex, pageCount, longTextTitle } = useSelector(state => ({
        pageIndex: state.longText.pageIndex,
        pageCount: state.longText.pageCount,
        longTextTitle: state.longText.longTextTitle
    }));

    //else
    const mode = useSelector(state => state.setting.mode);
    const { x, y } = useSelector(state => ({
        x: state.underbarPos.x,
        y: state.underbarPos.y
    }));

    const sentenceList = useSelector(state => state.text.sentenceList);
    const progress = useSelector(state => state.typingProgress.progress);

    const lastRef = useRef();
    const underbarRef = useRef();
    //
    useEffect(() => {
        dispatch(textToResultText());
    }, [text]);

    useEffect(() => {
        try {
            underbarRef.current.style.left = lastRef.current.getBoundingClientRect().left + "px";
            underbarRef.current.style.top = lastRef.current.getBoundingClientRect().top + 26 + "px";
        } catch (e) {
            console.error(e);
        }
    }, [resultText, lastRef]);

    useEffect(() => {
        try {
            underbarRef.current.style.left = x + "px";
            underbarRef.current.style.top = y + "px";
        } catch (e) {
            console.error(e);
        }

    }, [x, y])
    const printResultText = () => {
        return (
            resultText.map((row, idx) => {
                if (row.differ == true) {
                    return (<a style={{ color: "#404040" }}>{row.letter}</a>);
                } else if (row.differ == false) {
                    return (<a style={{
                        backgroundColor: "#ff5232",
                        borderRadius: "2px",
                    }}>{row.letter}</a>);
                } else {
                    if (row.differ == "last") {
                        return (<a ref={lastRef}>{text.split('')[idx]}</a>);
                    }
                    else {
                        return (<a>{text.split('')[idx]}</a>);
                    }
                }
            })
        );
    }


    if (mode == "sentence") {
        return (
            <div class="typing__text typing__text--sentence">
                <div ref={underbarRef} class="typing__underbar"></div>
                {sentenceList.map((row, idx) => {
                    if (progress == idx) return (
                        <div>
                            <div class="typing__before-text">{sentenceList[idx - 1]}</div>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                            <div class="typing__current">
                            <span class="material-symbols-outlined">
                                keyboard_double_arrow_right
                            </span>
                            <div class="typing__current-text">{printResultText()}</div></div>
                            <div class="typing__after-text">{sentenceList[idx + 1]}</div>
                        </div>
                    )

                })}


            </div>
        )
    } else if (mode == "word") {
        return (
            
                sentenceList.map((row, idx) => {
                    if (progress == idx) return (
                        <div class="typing__text typing__text--word">
                            <div class="typing__before-text typing__before-text--word">{sentenceList[idx - 2]}</div>
                            <div class="typing__before-text typing__before-text--word">{sentenceList[idx - 1]}</div>
                            <div class="typing__current-text typing__current-text--word">{printResultText()}</div>
                            <div class="typing__after-text typing__after-text--word">{sentenceList[idx + 1]}</div>
                            <div class="typing__after-text typing__after-text--word">{sentenceList[idx + 2]}</div>
                        </div>
                    )

                })

        )
    } else if (mode == "longText") {
        return (
            <div class="typing__text typing__text--long-text">
                <div ref={underbarRef} class="typing__underbar"></div>
                <div>{printResultText()}</div>
                {/*<div class="typing__page-count">{pageIndex + 1}/{pageCount}</div>*/}
            </div>
        )
    }
}

export default TextContainer;