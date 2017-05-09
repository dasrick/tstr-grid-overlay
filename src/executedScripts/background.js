//On installation, clear all non-default extension settings data
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.get(function(allData){

        var defaultSettings = allData['default'];

        chrome.storage.sync.clear(function(){
            if(defaultSettings) {
                chrome.storage.sync.set({'default': defaultSettings});
            }
        });

    });
});


//Clear tab sync storage when it is closed
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    chrome.storage.sync.remove(tabId.toString());
});
