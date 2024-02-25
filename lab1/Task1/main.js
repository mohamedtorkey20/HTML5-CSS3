
    var video = document.getElementById('myvideo');
    var btn_play = document.querySelector(".play");
    var btn_pause = document.querySelector(".pause");
    var btn_stop = document.querySelector(".stop");
    var btn_backward_big = document.querySelector(".backward_big");
    var btn_backward_small = document.querySelector(".backward_small");
    var btn_forward_big = document.querySelector(".forward_big");
    var btn_forward_small = document.querySelector(".forward_small");
    var range = document.getElementById('range');
    var volume = document.getElementById('volume');
    var btn_mute = document.querySelector(".mute");
    var speed = document.getElementById("speed");


    btn_play.addEventListener("click", function() {
        video.play();
    });

  
    btn_stop.addEventListener("click", function() {
        video.pause();
        video.currentTime = 0;
    });

    video.addEventListener("timeupdate", function() {
        range.value = video.currentTime;
    });

    btn_backward_big.addEventListener("click", function() {
        video.currentTime -= 20;
    });

    btn_backward_small.addEventListener("click", function() {
        video.currentTime -= 10;
    });

    btn_forward_small.addEventListener("click", function() {
        video.currentTime += 10;
    });

    btn_forward_big.addEventListener("click", function() {
        video.currentTime += 20;
    });

    range.addEventListener("input", function() {
        video.currentTime = range.value * video.duration / 100;
    });

    volume.addEventListener("input", function() {
        video.volume = volume.value;
    });

    btn_mute.addEventListener("click", function() {
        video.muted = !video.muted;
    });

    speed.addEventListener('input', function()
    {
        video.playbackRate = speed.value;
    });
