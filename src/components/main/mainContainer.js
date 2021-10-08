import img from "../../img/setting.png";
import ScoreContainer from "../score/scoreContainer";
import InputContainer from "../input/inputContainer";
import TextContainer from "../text/textContainer";
import SideBarContainer from "../sideBar/sideBarContainer";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSetting } from "../../reducers/setting";

import { CSSTransition } from "react-transition-group";
import "./main.css";
import { useEffect, useState } from "react";
import IndexContainer from "../index/indexContainer";
import SettingContainer from "../setting/settingContainer";
import ResultContainer from "../result/resultContainer";
import ScoreChartContainer from "../scoreChart/scoreChartContainer";
import { setIsFolded } from "../../reducers/fold";

const MainContainer = () => {
  const pageMode = useSelector((state) => state.pageMode.pageMode);
  const isFolded = useSelector(state => state.fold.isFolded);
  const dispatch = useDispatch();

  const wrapperStyle = {
    width: isFolded?"85%":"100%",
    transition: "0.25s all",
    transitionDelay: isFolded?"0.1s":"0s"
  }
  if (pageMode == "index") {
    return (
        <div 
          class="wrapper"
          style={wrapperStyle}>
          <IndexContainer />
          <button
            onClick={() => {
              dispatch(setIsFolded(!isFolded))
            }}
            class="foldBtn">M</button>
        </div>

    );
  } else if (pageMode == "setting") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <SettingContainer />
        <button
            onClick={() => {
              dispatch(setIsFolded(!isFolded))
            }}
            class="foldBtn">M</button>
      </div>
    );
  } else if (pageMode == "typing") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <ScoreContainer></ScoreContainer>
        <TextContainer></TextContainer>
        <InputContainer></InputContainer>
        <button
            onClick={() => {
              dispatch(setIsFolded(!isFolded))
            }}
            class="foldBtn">M</button>
      </div>
    );
  } else if (pageMode == "result") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <ResultContainer />
        <button
            onClick={() => {
              dispatch(setIsFolded(!isFolded))
            }}
            class="foldBtn">M</button>
      </div>
    );
  } else if (pageMode == "scoreChart") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <ScoreChartContainer />
        <button
            onClick={() => {
              dispatch(setIsFolded(!isFolded))
            }}
            class="foldBtn">M</button>
      </div>
    );
  }
};

export default MainContainer;
