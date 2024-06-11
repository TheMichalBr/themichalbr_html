document.addEventListener('DOMContentLoaded', function () {
    var videoID = 'VgQDsqOi2wo'; // Replace VIDEO_ID with your YouTube video ID
    var thumbnailImg = document.getElementById('thumbnailImg');
    thumbnailImg.src = 'https://img.youtube.com/vi/' + videoID + '/maxresdefault.jpg';
});

function loadVideo(videoID) {
    var videoFrame = document.getElementById('videoFrame');
    var thumbnail = document.getElementById('thumbnail');

    var loader = document.createElement('div');
    loader.className = 'loader';
    videoFrame.appendChild(loader);

    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1&rel=0&showinfo=0';
    iframe.width = '1590';
    iframe.height = '902';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    iframe.onload = function () {
        videoFrame.removeChild(loader);
    };

    videoFrame.innerHTML = '';
    videoFrame.appendChild(iframe);

    thumbnail.style.display = 'none';
}