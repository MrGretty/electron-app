// require('./app');
const { app, BrowserWindow } = require('electron');
const configWindow = require('./configWindow');
const configRegistrWindow = require('./configRegistrWindow');

// FIXME
// const PORT = 'http:localhost:3000';

let mainWindow;
let registWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow(configWindow);
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  return mainWindow;
}

function createRegistWindow() {
  registWindow = new BrowserWindow(configRegistrWindow);
  registWindow.loadURL(`file://${__dirname}/src/test.html`);
  registWindow.on('closed', () => {
    registWindow = null;
  });
  registWindow.once('ready-to-show', () => registWindow.show());
  return registWindow;
}

function isRegistred() {
  return configRegistrWindow.registred;
}

//  function registrPerson(Childwindow) {}

app.on('ready', () => {
  mainWindow = createMainWindow();
  const windowContent = mainWindow.webContents;
  windowContent.on('dom-ready', () => mainWindow.show());
  if (!isRegistred()) {
    createRegistWindow();
  }
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
