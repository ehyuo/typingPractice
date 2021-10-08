const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url')
const path = require('path')
const ipc = ipcMain

function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      maxWidth: 1000,
      maxHeight: 800,
      frame: false,
      webPreferences: {
        enableRemoteModule: true,
        nodeIntegration: true,
        contextIsolation: false,
        preload: __dirname + '/preload.js'
      }
    })
  
    const startUrl = "http://localhost:3000" || url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
    win.loadURL(startUrl);

    ipc.on("minimizeApp", () => {
      win.minimize();
    })
    ipc.on("closeApp", () => {
      win.close();
    })
  }

  app.whenReady().then(() => {
    createWindow()
  })