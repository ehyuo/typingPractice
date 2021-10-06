import img from "../../img/x.png"
const electron = window.require("electron");

const ipc = electron.ipcRenderer;

const TitleBarContainer = () => {
    
    return (
        <div class="titleBar">
            <button onClick={() => {
                ipc.send("closeApp");
            }}>close</button>
            <button onClick={() => {
                ipc.send("minimizeApp")
            }}>minimize</button>

        </div>
    )
}

export default TitleBarContainer;