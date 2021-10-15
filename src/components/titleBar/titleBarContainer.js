import "./titleBar.css";
import closeIcon from "../../img/x.png"
import minimizeIcon from "../../img/_.png"
const electron = window.require("electron");
const ipc = electron.ipcRenderer;

const TitleBarContainer = () => {

    return (
        <div class="titleBar">
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