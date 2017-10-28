require('./app');
const { app, BrowserWindow } = require('electron');
const configWindow = require('./configWindow');

// FIXME
const PORT = 'http:localhost:3000';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(configWindow);
  mainWindow.loadURL(PORT);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
