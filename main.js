const { app, BrowserWindow } = require('electron');
const configWindow = require('./configWindow');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow(configWindow);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  return mainWindow;
}

app.on('ready', () => {
  mainWindow = createMainWindow();
  const windowContent = mainWindow.webContents;
  windowContent.on('dom-ready', () => mainWindow.show());
  windowContent.on('crashed', e => console.log('window crashed. ', e));
});

app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
