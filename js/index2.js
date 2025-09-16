// 可扩展交互逻辑，如自动播放、弹窗提示等
// 当前仅做基础引用
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('birthdayVideo');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var fullscreenBtn = document.getElementById('fullscreenBtn');

    function updatePlayPauseBtn() {
        if (video.paused) {
            playPauseBtn.textContent = '▶️ 播放';
        } else {
            playPauseBtn.textContent = '⏸️ 暂停';
        }
    }
    playPauseBtn.onclick = function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        updatePlayPauseBtn();
    };
    video.addEventListener('play', updatePlayPauseBtn);
    video.addEventListener('pause', updatePlayPauseBtn);

    fullscreenBtn.onclick = function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
        video.play();
    };
});
