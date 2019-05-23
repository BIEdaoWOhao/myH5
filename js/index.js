$(function ($) {

    let $btn = $('.bgm_btn');
    let isRunning = true; // 判断按钮是否在旋转
    $btn.on('touchend',function() {
        if (isRunning) {
            $(this).css({animationPlayState: "paused"}) ;
            $('#audio')[0].pause();
            // clearInterval(timer);
        }else{
            $(this).css({animationPlayState: "running"});
            $('#audio')[0].play();
        }
        // isRunning ? $(this).css({animationPlayState: "paused"}) : $(this).css({animationPlayState: "running"});
        isRunning = !isRunning;
    })



})