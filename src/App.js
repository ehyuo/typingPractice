import './App.css';
import MainContainer from './components/main/mainContainer';

import SideBarContainer from './components/sideBar/sideBarContainer';
import { useEffect } from 'react';
import dotenv from 'dotenv'
dotenv.config()

const App = () => {
  useEffect(() => {
    console.log(process.env);
  }, []);

  return (
      <div class="app">
        <SideBarContainer />
        <MainContainer /> 
      </div>
  )
}

export default App;