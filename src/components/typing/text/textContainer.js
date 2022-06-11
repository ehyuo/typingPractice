import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { textToResultText } from "reducers/text/text";
import { setUnderbarPos } from 'reducers/text/underbarPos';

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
    const { x, y } = useSelector(state => ({
        x: state.underbarPos.x,
        y: state.underbarPos.y
    }));

    const [underbarY, setUnderbarY] = useState(0);
    const lastRef = useRef();
    const underbarRef = useRef();
    //
    useEffect(() => {
        dispatch(textToResultText());
    }, [text]);

    useEffect(() => { 
        try{
            underbarRef.current.style.left = lastRef.current.getBoundingClientRect().left + "px";
            underbarRef.current.style.top = lastRef.current.getBoundingClientRect().top + 26 + "px";
        } catch(e) {
            console.error(e);
        }
    }, [resultText, lastRef]);

    useEffect(() => {
        underbarRef.current.style.left = x + "px";
        underbarRef.current.style.top = y + "px";
    }, [x, y])
    const printResultText = () => {
        return (
            resultText.map((row, idx) => {
                if (row.differ == true) {
                    return (<a style={{ color: "#404040" }}>{row.letter}</a>);
                } else if (row.differ == false) {
                    return (<a style={{ backgroundColor: "#ff5232", 
                                        borderRadius: "2px",
                                    }}>{row.letter}</a>);
                } else {
                    if(row.differ == "last") {
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
                <div class="typing__current-text">{printResultText()}</div>
                <div class="typing__next-text">{nextText}</div>
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
                <div ref={underbarRef} class="typing__underbar"></div>
                <div>{printResultText()}</div>
                {/*<div class="typing__page-count">{pageIndex + 1}/{pageCount}</div>*/}
            </div>
        )
    }
}

export default TextContainer;