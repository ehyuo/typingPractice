import "./titleBar.css";
import closeIcon from "../../img/x.png"
import minimizeIcon from "../../img/_.png"
const electron = window.require("electron");
const ipc = electron.ipcRenderer;

const TitleBarContainer = () => {
    
    return (
        <div class="titleBar">
            <div class="logo">
                tP
            </div>
            <div class="functions">
            <button onClick={() => {
                ipc.send("minimizeApp")
            }}><img src={minimizeIcon} /></button>
            <button onClick={() => {
                ipc.send("closeApp");
            }}><img src={closeIcon} /></button>
            
            </div>
            
        </div>
    )
}

export default TitleBarContainer;