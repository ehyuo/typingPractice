import './App.css';

import MainContainer from 'components/main/mainContainer';
import SideBarContainer from 'components/sideBar/sideBarContainer';
import TitleBarContainer from 'components/titleBar/titleBarContainer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const App = () => {
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
  return (
    <div class={isDarkMode?"app-dark":"app-light"}>
      <TitleBarContainer />
      <div
        style={{ display: "flex" }}>
        <SideBarContainer />
        <MainContainer />
      </div>
    </div>
  )
}

export default App;