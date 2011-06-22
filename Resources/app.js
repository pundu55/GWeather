// create tab group
var tabGroup = Ti.UI.createTabGroup();

// create weather window
var win = Ti.UI.createWindow({  
    title:'Weather',
	url:'weather.js'
});

// create weather tab
var tab = Ti.UI.createTab({ 
    icon:'light_burst.png',
    title:'Weather',
    window:win
});

// add the tab to the tab group
tabGroup.addTab(tab);

// open tab group
tabGroup.open();