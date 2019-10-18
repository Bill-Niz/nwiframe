const GUI = require('nw.gui')

nw.Window.open('index.html', {
  width: 900,
    height: 800,
}, function(win) {
   win.on('new-win-policy', (frame, url, policy) => {
        policy.ignore()
        GUI.Shell.openExternal(url)
      })
});