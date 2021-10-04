const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      frame: false
    })
  
    win.loadURL("http://localhost:3000/setting")
  }

  app.whenReady().then(() => {
    createWindow()
  })