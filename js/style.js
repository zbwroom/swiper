//必须的js代码
var flag = true;  
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    autoplay: 1500,     //1.5s自动切换
    paginationClickable: true,
    direction: 'vertical', //右侧的导航点
    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        console.log(swiper.activeIndex);   //显示当前第几也
        if (swiper.activeIndex == 1) {
            if (flag) {
                swiper.removeSlide(0);      //如果当前是第一页，移除最初的页面
                flag = false;
            }
            swiper.stopAutoplay();     //如果当前是第一页，禁止自动切换
        };
    }
});
//必须的js代码结束

//音乐控制
var music = document.getElementById("music");
var music_bg = music.getElementsByClassName('music_bg')[0];
var music_pic = music.getElementsByClassName('music_pic')[0];
var aud = music.getElementsByClassName('aud')[0];

//定义音乐的状态变量
var music_sta = 1;
music.onclick = function() {
        if (music_sta == 1) {
            //      让背景gif隐藏
            music_bg.style.display = 'none';
            //      停止音乐图标的旋转
            music_pic.style.animation = 'none';
            //      停掉音乐
            aud.pause();
            music_sta = 2;
        } else if (music_sta == 2) {
            music_bg.style.display = 'block';
            music_pic.style.animation = 'music 2s linear infinite';
            aud.play();
            music_sta = 1;
        }
    }
//音乐控制结束
