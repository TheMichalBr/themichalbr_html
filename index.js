document.addEventListener('DOMContentLoaded', function () {
    var videoID = 'VgQDsqOi2wo'; // YouTube video ID
    var thumbnailImg = document.getElementById('thumbnailImg');
    thumbnailImg.src = 'https://img.youtube.com/vi/' + videoID + '/maxresdefault.jpg';

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeVideo();
    }});
});

function loadVideo(videoID) {
    var videoFrame = document.getElementById('videoFrame');
    var thumbnail = document.getElementById('thumbnail');
    var overlay = document.getElementById('overlay');

    var loader = document.createElement('div');
    loader.className = 'loader';
    videoFrame.innerHTML = '';
    videoFrame.appendChild(loader);

    var closeButton = document.createElement('div');
    closeButton.className = 'close-button';
    closeButton.addEventListener('click', function () {
        closeVideo();
    });

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1&rel=0&showinfo=0&loop=1&mute=1&autoplay=1';
    iframe.width = '1590';
    iframe.height = '902';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    iframe.onload = function () {
        videoFrame.removeChild(loader);
    };

    videoFrame.appendChild(iframe);
    videoFrame.appendChild(closeButton);

    thumbnail.style.display = 'none';
    overlay.classList.add('show');
}

function closeVideo() {
    var videoFrame = document.getElementById('videoFrame');
    var thumbnail = document.getElementById('thumbnail');
    var overlay = document.getElementById('overlay');

    videoFrame.innerHTML = '';
    thumbnail.style.display = 'block';
    overlay.classList.remove('show');
}

// EQ - CPU AND COOLER

var cpuandcooler = ["./media/E_4.webp", "./media/E_5.webp"]

var indexcpu = 0;
setInterval(function () {
    if (indexcpu === cpuandcooler.length) {
        indexcpu = 0;
    }
    document.getElementById("imageC").src = cpuandcooler[indexcpu];
    indexcpu++;
}, 4100);

// EQ - DRIVES

var drives = ["./media/E_8.webp", "./media/E_9.webp"]

var indexdrives = 0;
setInterval(function () {
    if (indexdrives === drives.length) {
        indexdrives = 0;
    }
    document.getElementById("imageD").src = drives[indexdrives];
    indexdrives++;
}, 4200);

// EQ - MONITORS

var monitors = ["./media/E_11.webp", "./media/E_12.webp"]

var indexmonitors = 0;
setInterval(function () {
    if (indexmonitors === monitors.length) {
        indexmonitors = 0;
    }
    document.getElementById("imageMS").src = monitors[indexmonitors];
    indexmonitors++;
}, 4300);

// EQ - MOBILE AND OTHER

var mobileother = ["./media/E_18.webp", "./media/E_19.webp"]

var indexmobil = 0;
setInterval(function () {
    if (indexmobil === mobileother.length) {
        indexmobil = 0;
    }
    document.getElementById("imageM").src = mobileother[indexmobil];
    indexmobil++;
}, 4400);