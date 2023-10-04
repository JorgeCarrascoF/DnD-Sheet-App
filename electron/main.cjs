// eslint-disable-next-line no-undef
const { app, BrowserWindow } = require('electron');
// eslint-disable-next-line no-undef
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        titleBarStyle: '#3c1b67',
        resizable: false
    })
    // win.removeMenu()
    // win.loadURL('http://localhost:6969');
    win.loadFile(path.join(app.getAppPath(), 'dist/index.html'))
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('activate', ()=> {
    if(BrowserWindow.getAllWIndows().length === 0) createWindow();
})

app.on('window-all-closed', ()=> {
    app.quit();
})