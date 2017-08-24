const {app, Menu, Tray, MenuItem} = require('electron')
const notify = require('electron-main-notification')

// let tray = null
// app.on('ready', () => {
//   tray = new Tray('./images/tray_icon_purple.png')
//   const contextMenu = Menu.buildFromTemplate([
//     {label: 'Item1', type: 'radio'},
//     {label: 'Item2', type: 'radio'},
//     {label: 'Item3', type: 'radio', checked: true},
//     {label: 'Item4', type: 'radio'}
//   ])
//   tray.setToolTip('This is my application.')
//   tray.setContextMenu(contextMenu)
// })

// // This is for Linux distros that have issues!
let appIcon = null
app.on('ready', () => {
    const ping = require('node-ping');

    const hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

    hosts.forEach(function (host) {
        ping.promise.probe(host)
            .then(function (res) {
                console.log(res);
            });
    });

    setInterval(function(){
        notify('This is a notification!', { body: 'See? Really easy to use!' }, () => {
            console.log('The notification got clicked on!')
        })
    },1000)
    appIcon = new Tray('./images/tray_icon_purple.png')
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Quit', role: 'quit', type: 'radio'},
        {label: 'Click me', click() {console.log('clicked the button')}, type: 'radio'},
        new MenuItem({label: "Colour change!", click(){appIcon.setImage('./images/tray_icon_black.png')}, type: 'radio'})
    ])

    // Make a change to the context menu
    contextMenu.items[1].checked = false

    // Call this again for Linux because we modified the context menu
    appIcon.setContextMenu(contextMenu)
})

