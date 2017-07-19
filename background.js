chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    var url = info.url || tab.url;
    /*if (url && url.indexOf('moomoo.io') == -1) {
        chrome.browserAction.disable(tabId);
    } else {
        chrome.browserAction.enable(tabId);
    }*/
    if (url == null) {
        chrome.browserAction.disable(tabId);
    } else {
        chrome.browserAction.enable(tabId);
    }
});
