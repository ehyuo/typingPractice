import './App.css';
import MainContainer from './components/main/mainContainer';

import SideBarContainer from './components/sideBar/sideBarContainer';
import { useEffect } from 'react';
import dotenv from 'dotenv'
import TitleBarContainer from './components/titleBar/titleBarContainer';
dotenv.config()

const App = () => {
  useEffect(() => {
    console.log(process.env);
  }, []);

  return (
      <div class="app">
        <TitleBarContainer />
        <div
        style={{display: "flex"}}>
        <SideBarContainer />
        <MainContainer /> 
        </div>
        
      </div>
  )
}

export default App;