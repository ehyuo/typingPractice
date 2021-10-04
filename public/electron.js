const { app, BrowserWindow } = require('electron');
const url = require('url')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      maxWidth: 1000,
      maxHeight: 800,
      frame: false,
      resizable:false,
      transparent:true,
      webPreferences: {
        enableRemoteModule: true,
        preload: __dirname + '/preload.js'
      }
    })
  
    const startUrl = url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
    win.loadURL(startUrl);

  }

  app.whenReady().then(() => {
    createWindow()
  })