const {app, Menu, Tray} = require('electron')

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
  appIcon = new Tray('./images/tray_icon_purple.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Quit', type: 'radio'},
    {label: 'Click me', click() {console.log('clicked the button')}, type: 'radio'}
  ])

  // Make a change to the context menu
  contextMenu.items[1].checked = false

  // Call this again for Linux because we modified the context menu
  appIcon.setContextMenu(contextMenu)
})