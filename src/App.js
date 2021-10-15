import './App.css';

import MainContainer from 'components/main/mainContainer';
import SideBarContainer from 'components/sideBar/sideBarContainer';
import TitleBarContainer from 'components/titleBar/titleBarContainer';

const App = () => {

  return (
    <div class="app">
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