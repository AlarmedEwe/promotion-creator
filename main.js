const {app, BrowserWindow} = require('electron');

function createWindow() {
    const window = new BrowserWindow({
        width:800,
        height: 450,
        frame: false,
        icon: 'favicon.png',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    
    window.webContents.openDevTools();
    window.removeMenu();
    window.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().lenght === 0)
        createWindow();
});