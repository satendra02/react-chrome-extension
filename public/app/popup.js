


document.getElementById("button").addEventListener("click",function getValues(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    loading(true)
    console.log(username, password)
    if (!username.trim() || !password.trim()) {
        return document.getElementById('error').innerText = '请输入用户名或密码'
    }
    if (username.trim() && password.trim()) {
        return document.getElementById('error').innerText = '用户名或密码有误，请重新输入'
    }
})
function clearError () {
    loading(false)
    document.getElementById('error').innerText = ''
}

function loading (isLoading) {
    var button = document.getElementById("button")
    if (isLoading) {
        button.disabled = true
        button.innerText = '登录中'
    } else {
        button.disabled = false
        button.innerText = '登录'
    }
}
document.getElementById("username").addEventListener("focus", clearError)
document.getElementById("password").addEventListener("focus", clearError)

chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function (response) {
        if (response.token || !response.show) {
            window.close()
        } else if (response.show) {
            setTimeout(function () {
                chrome.tabs.sendMessage(activeTab.id, {"token": "123"});
                window.close()
            }, 3000)
        }
    });
});

