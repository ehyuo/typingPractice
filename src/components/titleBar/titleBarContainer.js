import "./titleBar.css";
import closeIcon from "img/x.png"
import minimizeIcon from "img/_.png"
import logoIcon from "img/logo.png"
import { useSelector } from "react-redux";
const electron = window.require("electron");
const ipc = electron.ipcRenderer;

const TitleBarContainer = () => {
    const isDarkMode = useSelector(state => state.darkMode.isDarkMode);
    return (
        <div class={isDarkMode?"titleBar dark":"titleBar light"}>
            <div class="logo">
                
            </div>
            <div class="functions">
                <button 
                    class="minimizeBtn"
                    onClick={() => {
                    ipc.send("minimizeApp")
                }}><img src={minimizeIcon} /></button>
                <button
                    class="closeBtn"
                    onClick={() => {
                        ipc.send("closeApp");
                    }}><img src={closeIcon} /></button>

            </div>

        </div>
    )
}

export default TitleBarContainer;