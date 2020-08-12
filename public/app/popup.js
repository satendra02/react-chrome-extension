var token = localStorage.getItem("token");
if (token) {
    chrome.tabs.query({active: true, currentWindow:true},function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
    window.close()
} else {
    setTimeout(function () {
        localStorage.setItem("token", "Smith");
        chrome.tabs.query({active: true, currentWindow:true},function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
        });
        window.close()
    }, 3000)
}

