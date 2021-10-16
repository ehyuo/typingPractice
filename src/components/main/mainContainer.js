import TypingContainer from "components/typing/typingContainer";
import { useSelector, useDispatch } from "react-redux";

import "./main.css";
import IndexContainer from "../index/indexContainer";
import SettingContainer from "../setting/settingContainer";
import ResultContainer from "../result/resultContainer";
import ScoreChartContainer from "../scoreChart/scoreChartContainer";
import { setIsFolded } from "reducers/fold";

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
        <TypingContainer />        
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
