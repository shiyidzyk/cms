window.onload = function() {
    var audio = document.getElementById('birthdayMusic');
    var btn = document.getElementById('musicBtn');
    var tip = document.querySelector('.music-tip');

    // 自动播放
    var playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(function() {
            tip.textContent = '浏览器拦截了自动播放，请点击右上角按钮播放音乐~';
            btn.textContent = '点击播放音乐';
        });
    }
    // 按钮点击切换播放/暂停
    btn.onclick = function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };
    // 音乐状态变化时更新按钮内容
    audio.onplay = function() {
        btn.textContent = '点击暂停音乐';
        tip.textContent = '';
    };
    audio.onpause = function() {
        btn.textContent = '点击播放音乐';
    };

    // 打字机效果，标题动画播放完后再开始
    const blessText = '亲爱的朋友，生日快乐！\n愿你的每一天都如阳光般灿烂\n每一刻都充满欢笑与幸福\n未来可期，梦想成真！';
    const typewriterDiv = document.getElementById('typewriter');
    const cakeEmoji = document.querySelector('.heart');
    let i = 0;
    function typeWriter() {
        if (i < blessText.length) {
            typewriterDiv.textContent += blessText[i];
            i++;
            setTimeout(typeWriter, 80);
        } else {
            // 文案动画播放完成后，蛋糕表情入场
            cakeEmoji.classList.add('enter');
        }
    }
    // 标题动画2秒，打字机动画延迟2秒后开始
    setTimeout(typeWriter, 2000);
    /* 蛋糕入场动画 */
};