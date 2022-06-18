import TypingContainer from "components/typing/typingContainer";
import { useSelector, useDispatch } from "react-redux";

import "./main.css";
import IndexContainer from "../index/indexContainer";
import SettingContainer from "../setting/settingContainer";
import ResultContainer from "../result/resultContainer";
import ScoreChartContainer from "../scoreTable/scoreTableContainer";
import { setIsFolded } from "reducers/fold";

const MainContainer = () => {
  const dispatch = useDispatch();
  const pageMode = useSelector(state => state.pageMode.pageMode);
  const isFolded = useSelector(state => state.fold.isFolded);

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    transition: "0.25s all",
    transitionDelay: isFolded?"0.1s":"0s",
    width: "100%",
  }

  const returnFoldBtn = () => {
    return (
      <button
      onClick={() => {
        dispatch(setIsFolded(!isFolded))
      }}
      class="wrapper__button">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined">menu
        </span>
      </button>
    )
  }

  if (pageMode == "index") {
    return (
        <div 
          class="wrapper"
          style={wrapperStyle}>
          <IndexContainer />
          {returnFoldBtn()}
        </div>
    );
  } else if (pageMode == "setting") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <SettingContainer />
        {returnFoldBtn()}
      </div>
    );
  } else if (pageMode == "typing") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <TypingContainer />        
        {returnFoldBtn()}
      </div>
    );
  } else if (pageMode == "result") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <ResultContainer />
        {returnFoldBtn()}
      </div>
    );
  } else if (pageMode == "scoreTable") {
    return (
      <div 
        class="wrapper"
        style={wrapperStyle}>
        <ScoreChartContainer />
        {returnFoldBtn()}
      </div>
    );
  }
};

export default MainContainer;
