<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>给最爱的你</title>
    <link rel="stylesheet" href="style.css">
    <!-- 引入Google Fonts艺术字体 -->
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap" rel="stylesheet">
</head>
<body>
    <!-- 背景图片轮播 -->
    <div class="slideshow">
        <img src="1.jpg" alt="华晨宇图片1" class="slide active">
        <img src="2.jpg" alt="华晨宇图片2" class="slide">
        <img src="3.jpg" alt="华晨宇图片3" class="slide">
    </div>

    <!-- 内容区域 -->
    <div class="content">
        <!-- 顶部文字 -->
        <div class="header-text">
            <h1>亲爱的万琴</h1>
            <p>这是为你准备的新年网页，愿你喜欢！</p>
        </div>

        <!-- 动态祝福语 -->
        <div class="blessings">
            <p class="blessing active">愿新的一年，你所求皆如愿，所行化坦途，多喜乐，长安宁！</p>
            <p class="blessing">愿未来的每一天，你都能被温柔以待，心中有爱，眼中有光！</p>
            <p class="blessing">愿我们携手共度每一个春夏秋冬，风雨同舟，不离不弃！</p>
        </div>
    </div>

    <!-- 音乐播放器 -->
    <div class="music-player">
        <audio id="bg-music" loop>
            <source src="华晨宇&郎朗 - 好想爱这个世界啊.mp3.mp3" type="audio/mpeg">
            你的浏览器不支持音频播放。
        </audio>
    </div>

    <!-- 底部浪漫寄语 -->
    <footer>
        <p>希望在新年里所念皆所愿，所愿皆所成！</p>
        <p>无论未来如何，我都会一直陪在你身边。❤️</p>
    </footer>

    <!-- 提示用户点击页面以播放音乐 -->
    <div id="play-music-prompt">
        <p>点击页面播放音乐</p>
    </div>

    <script src="script.js"></script>
</body>
</html># MTGitHub
