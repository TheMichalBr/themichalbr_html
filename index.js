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