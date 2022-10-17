const SETUP = chrome.runtime.getURL("setup.html");

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        console.log("This is a first install!");
        chrome.tabs.create({ url: SETUP });
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        chrome.tabs.create({ url: SETUP });
    }
});