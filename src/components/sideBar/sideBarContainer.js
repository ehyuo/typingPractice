import "./sideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setPageMode } from "../../reducers/pageMode";
import { useEffect, useState } from "react";

const SideBarContainer = () => {
  const dispatch = useDispatch();
  const pageMode = useSelector((state) => state.pageMode.pageMode);
  const isFolded = useSelector((state) => state.fold.isFolded);

  const [position, setPosition] = useState(35);

  useEffect(() => {
    if (pageMode == "index") setPosition(35);
    if (pageMode == "setting") setPosition(85);
    if (pageMode == "scoreChart") setPosition(135);
  }, [pageMode]);

  return (
    <div
      class="sideBar"
      style={{
        width: isFolded ? "15%" : "0%",
        color: isFolded ? "#dfe6e9": "#2d3436",
        transition: "width 0.3s, color 0.1s",
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
