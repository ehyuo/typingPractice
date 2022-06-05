import "./sideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setPageMode } from "../../reducers/pageMode";
import { useEffect, useState, useRef } from "react";

const SideBarContainer = () => {
  const dispatch = useDispatch();
  const pageMode = useSelector((state) => state.pageMode.pageMode);
  const isFolded = useSelector((state) => state.fold.isFolded);


  const [position, setPosition] = useState(65);

  useEffect(() => {
    if (pageMode == "index") setPosition(65);
    if (pageMode == "setting") setPosition(115);
    if (pageMode == "scoreChart") setPosition(165);
  }, [pageMode]);
  
  
  return (
    <div
      class="sideBar"
      style={{
        visibility: isFolded? "visible" : "hidden",
        opacity: isFolded? 1 : 0,
        transition: "0.2s all",
      }}
    >
      <div
        class="selectedPageMode"
        style={{
          top: position,
          transition: "0.25s all",
        }}
      ></div>

      <div class="buttonList">
        <button
          onClick={() => {
            dispatch(setPageMode("index"));
          }}
        >
          <div>Index</div>
        </button>
        <button
          onClick={() => {
            dispatch(setPageMode("setting"));
          }}
        >
          <div>Practice</div>
        </button>
        <button
          onClick={() => {
            dispatch(setPageMode("scoreChart"));
          }}
        >
          <div>Scores</div>
        </button>
        <button
          
        >
          <div>About</div>
        </button>
      </div>
    </div>
  );
};

export default SideBarContainer;
