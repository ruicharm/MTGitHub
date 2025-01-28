// 获取元素
const slides = document.querySelectorAll('.slide');
const blessings = document.querySelectorAll('.blessing');
let currentIndex = 0;

// 图片和祝福语轮换函数
function showNextSlide() {
    // 隐藏当前图片和祝福语
    slides[currentIndex].classList.remove('active');
    blessings[currentIndex].classList.remove('active');

    // 计算下一张图片和祝福语的索引
    currentIndex = (currentIndex + 1) % slides.length;

    // 显示下一张图片和祝福语
    slides[currentIndex].classList.add('active');
    blessings[currentIndex].classList.add('active');
}

// 设置轮换间隔（5秒）
setInterval(showNextSlide, 5000);

// 点击页面播放音乐
document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play();
        document.getElementById('play-music-prompt').style.display = 'none';
    }
});