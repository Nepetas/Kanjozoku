const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const EventEmitter = require("events");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 350,
        height: 605,
        title: "Kanjozoku",
        icon: path.join(__dirname, "icon.ico"),
        autoHideMenuBar: true,
        skipTaskbar: true,
        transparent: true,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.setAlwaysOnTop(true, "screen");
    mainWindow.setMinimizable(false);
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    let tray = null;
    app.whenReady().then(() => {
        tray = new Tray(path.join(__dirname, "icon.ico"));

        const contextMenu = Menu.buildFromTemplate([{
            label: "Close",
            type: "normal",
            click: () => app.quit(),
        }, ]);

        tray.setToolTip("Kanjozou Multi Tool");
        tray.setContextMenu(contextMenu);
        tray.setIgnoreDoubleClickEvents(true);

        tray.on("click", function(e) {
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            } else {
                mainWindow.show();
            }
        });
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.