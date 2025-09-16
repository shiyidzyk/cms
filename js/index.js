function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
    // 检查通知权限
    let notifyAllowed = false;
    if (window.Notification && Notification.permission === 'granted') {
        notifyAllowed = true;
    }
    // 用户名错误
    if (username !== '陈梦松') {
        if (notifyAllowed) {
            showNotify('用户名错误！用户名是你的名字哦！\n用户名是靳春美，密码是你生日哦！（四位数）');
        } else {
            alert('用户名是你的名字，密码是你的生日哦!（密码为4位数）');
        }
        return;
    }
    // 密码错误
    if (password !== '0917') {
        if (notifyAllowed) {
            showNotify('密码错误！密码是你生日哦！（四位数）\n用户名是你的名字哦！，密码是你生日哦！（四位数）');
        } else {
            alert('用户名是你的名字，密码是你的生日哦!（密码为4位数）');
        }
        return;
    }
    // 登录成功
    if (notifyAllowed) {
        showNotify('登录成功，生日快乐！');
        setTimeout(function(){
            window.location.href = 'html/index1.html';
        }, 800);
    } else {
        alert('登录成功，生日快乐！');
        window.location.href = 'html/index1.html';
    }
}

function showNotify(msg) {
    if (window.Notification && Notification.permission === 'granted') {
        new Notification(msg);
    } else if (window.Notification && Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification(msg);
            } else {
                alert('用户名是你的名字，密码是你的生日哦!（密码为4位数）');
            }
        });
    } else {
        alert('用户名是你的名字，密码是你的生日哦!（密码为4位数）');
    }
}
