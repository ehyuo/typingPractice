import React from "react";
import { useState, useRef } from "react";
import InputField from "./inputField";
import { useDispatch, useSelector } from "react-redux";

import { insertTypingAccuracy, setTypingAccuracy } from "reducers/typing/typingAccuracy";
import { setIsRunning, setTypingCount, resetInterval } from "reducers/interval";
import { setInputText, resetInputText } from "reducers/text/inputText";
import { setUnderbarPos } from "reducers/text/underbarPos";
import { setResultText, nextTextToText, setNextText, textToResultText, setText } from "reducers/text/text";
import { turnPage } from "reducers/text/longText";
import { increaseTypingProgress } from "reducers/typing/typingProgress";
import { insertTypingSpeed } from "reducers/typing/typingSpeed";
import { increaseBackSpace } from "reducers/typing/typingBackspace";

import sound from "fonts/keySound.wav";
import "./input.css"

const InputContainer = (props) => {
  const dispatch = useDispatch(); //dispatch
  //for keyboard layout
  const [firstLine] = useState(["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "Backspace"])
  const [secondLine] = useState(["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"])
  const [thirdLine] = useState(["Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"])
  const [fourthLine] = useState(["ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftRight"])
  const [fifthLine] = useState(["Space"])
  //text
  const { text, inputText, resultText } = useSelector(state => ({
    text: state.text.text,
    inputText: state.inputText.inputText,
    resultText: state.text.resultText
  }));

  const { longTextContent, pageIndex } = useSelector(state => ({
    longTextContent: state.longText.longTextContent,
    pageIndex: state.longText.pageIndex
  }));

  //else
  const { mode, content, language } = useSelector(state => ({
    mode: state.setting.mode,
    content: state.setting.content,
    language: state.setting.language
  }))
  const progress = useSelector(state => state.typingProgress.progress);
      const sentenceList = useSelector(state => state.text.sentenceList);
  //pressed Keys 
  const [pressedKey, setPressedKey] = useState([]);
  const inputRef = useRef(null);
  const typingCount = useSelector(state => state.interval.typingCount);
  //input
  const onInput = (e) => {
    if (e.target.value.length == 1) {
      dispatch(setIsRunning(true));
    }
    //?????????
    const textList = text.split('');
    const inputList = e.target.value.split('');

    //resultText
    let temp = true;
    dispatch(setResultText(textList.map((row, idx) => {
      if (row == inputList[idx]) {
        return ({ differ: true, letter: row });
      } else {
        if (inputList[idx] == null || (language == "hangul" && idx+1 == inputList.length)) {
          if(temp) {
            temp = !temp;
            return ({ differ: "last", letter: row });
          }
          else return ({ differ: "yet", letter: row });
        } else {
          return ({ differ: false, letter: row });
        }
      }
    })));

    //accuracy
    const array = resultText.filter((row) => row.differ == false);
    dispatch(setTypingAccuracy(Math.floor((inputList.length - array.length) * 100 / inputList.length)));

    //countTyping
    const array1 = resultText.filter((row) => row.differ == true);
    dispatch(setTypingCount(array1.length));
    dispatch(setInputText(e.target.value));
  }

  //enter and backspace action
  const onKeyDown = (e) => {
    //????????? ????????? ??????
    const keySound = new Audio(sound);
    keySound.volume = 0.3;
    keySound.play();

    //????????? ?????? ??????
    const arrows = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"]
    if(arrows.includes(e.key)) e.preventDefault();

    if(e.key == "Shift") setPressedKey([...pressedKey, e.code]);
    else setPressedKey([...pressedKey, e.key]);

    if (e.key == "Backspace") {
      dispatch(setTypingCount(typingCount - 2));
      dispatch(increaseBackSpace());
    }
    if (e.key == "Enter") {   
      if (inputText.length >= text.length) {
        dispatch(setResultText([])); //?????? ?????? ?????????
        dispatch(resetInterval());  //Interval ?????????
        dispatch(setUnderbarPos(302, 208));   
        if (mode == "longText") {
          dispatch(turnPage());
          dispatch(setText(longTextContent[pageIndex+1]));
        } else {
          dispatch(setText(sentenceList[progress+1]));
          dispatch(setNextText(sentenceList[progress]))
        }

        dispatch(textToResultText());

        dispatch(insertTypingSpeed()); // speed ?????? ?????? insert
        dispatch(increaseTypingProgress()); //?????????
        dispatch(insertTypingAccuracy()); //accuracy ?????? ?????? insert
        dispatch(resetInputText()); //input ?????????
      }
    }
  }
  const onKeyUp = (e) => {
    if(e.key == "Shift") setPressedKey(pressedKey.filter(i => i != e.code));
    else setPressedKey(pressedKey.filter(i => i != e.key));
  }
  //focus ????????? ??????
  const onBlur = (e) => {
    inputRef.current.focus();
  }
  return (
    <InputField
      firstLine={firstLine}
      secondLine={secondLine}
      thirdLine={thirdLine}
      fourthLine={fourthLine}
      fifthLine={fifthLine}
      inputText={inputText}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      pressedKey={pressedKey}
      onBlur={onBlur}
      inputRef={inputRef}
      >
    </InputField>
  )
}

export default InputContainer;