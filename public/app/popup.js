


document.getElementById("button").addEventListener("click",function getValues(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    if (!username.trim() || !password.trim()) {
        return document.getElementById('error').innerText = '请输入用户名或密码'
    }
    if (username.trim() && password.trim()) {
        loading(true)
        // https://apiv2.aminer.cn/magic
        // https://apiv2-beta.aminer.cn/magic
        fetch("https://apiv2.aminer.cn/magic", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                {
                    "action": "user.SignIn",
                    "parameters": {
                        "email": username,
                        "pass": password,
                        "src":"reco"
                    }
                }
            ])
        }).then(function(response) {
            if (response.status === 200) {
                return response.text()
            }
        }).then(function (response) {
            var body = JSON.parse(response)
            if (body.data && body.data[0]) {
                var keyValues = body.data[0]['keyValues']
                if (!keyValues.status) {
                    return document.getElementById('error').innerText = '用户名或密码有误，请重新输入'
                } else if (keyValues.token) {
                    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
                        var activeTab = tabs[0];
                        chrome.tabs.sendMessage(activeTab.id, {"token": keyValues.token });
                        window.close()
                    });
                }
            }
        })

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
        }
    });
});

