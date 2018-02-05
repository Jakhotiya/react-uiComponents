const electron = require('electron');
const { app, BrowserWindow,ipcMain,Notification} = electron;


let mainWindow;

app.on('ready', () => {
  let screenSize = electron.screen.getPrimaryDisplay().size;
  mainWindow = new BrowserWindow({
    fullscreen:true,
    width: screenSize.width,
    height: screenSize.height});

  mainWindow.loadURL(`file://${__dirname}/build/index.html`);
});

ipcMain.on('task',(evt,args)=>{
  let notification = new Notification({title:args});
  notification.show();
})

ipcMain.on('online',(evt,args)=>{
  let notification = new Notification({title:args});
  notification.show();
})


