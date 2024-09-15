document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var videoId = videoContainer.getAttribute('data-video-id');
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';

    var thumbnailElement = videoContainer.querySelector('.video-thumbnail');
    var playButton = videoContainer.querySelector('.play-button');
    var loadingSpinner = videoContainer.querySelector('.loading-spinner');
    var closeButton = videoContainer.querySelector('.close-button');

    thumbnailElement.style.backgroundImage = 'url(' + thumbnailUrl + ')';

    function loadIframe() {
        thumbnailElement.style.opacity = '0';
        playButton.style.opacity = '0';
        loadingSpinner.style.display = 'flex';
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1'); // &rel=0&showinfo=0&loop=1&mute=0
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true'); // iframe.width = '1590'; iframe.height = '902';

        iframe.onload = function () {
            loadingSpinner.style.display = 'none';
            closeButton.style.display = 'block';
            videoContainer.style.transform = 'scale(1)';
        };

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
        videoContainer.appendChild(closeButton);
    }

    function closeIframe() {
        videoContainer.style.transform = 'scale(0.9)';
        setTimeout(() => {
            videoContainer.innerHTML = '';
            videoContainer.appendChild(thumbnailElement);
            videoContainer.appendChild(playButton);
            videoContainer.appendChild(loadingSpinner);
            videoContainer.appendChild(closeButton);
            closeButton.style.display = 'none';
            thumbnailElement.style.opacity = '1';
            playButton.style.opacity = '1';
        }, 500);
    }

    videoContainer.addEventListener('click', function (event) {
        if (event.target === playButton || event.target === thumbnailElement) {
            loadIframe();
        } else if (event.target === closeButton) {
            closeIframe();
        }
    });
});

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

// CR1

var workshop = ["./media/GB_ReviewC.webp", "./media/GB_ReviewN.webp"]

var indexworkshop = 0;
setInterval(function () {
    if (indexworkshop === workshop.length) {
        indexworkshop = 0;
    }
    document.getElementById("imageCRG").src = workshop[indexworkshop];
    indexworkshop++;
}, 5500);

// CR2

var workshopDVA = ["./media/GB_ReviewC.webp", "./media/GB_ReviewN.webp"]

var indexworkshopDVA = 0;
setInterval(function () {
    if (indexworkshopDVA === workshopDVA.length) {
        indexworkshopDVA = 0;
    }
    document.getElementById("imageCRG2").src = workshopDVA[indexworkshopDVA];
    indexworkshopDVA++;
}, 5700);

// VersionC for GitHub

async function fetchVersion() {
    try {
        const response = await fetch('https://api.github.com/repos/themichalbr/godotgames/releases/latest');
        const data = await response.json();
        const version = data.tag_name;  // Get GitHub
        document.getElementById('version').textContent = version;

        // Kontrola, zda je verze synchronizována
        const currentVersion = 'v1.0';  // Used version
        const syncStatusEl = document.getElementById('syncStatus');
        if (version === currentVersion) {
            syncStatusEl.textContent = '✅';  // Syn
            syncStatusEl.style.color = 'green';
        } else {
            syncStatusEl.textContent = '❌';  // Nesyn
            syncStatusEl.style.color = 'red';
        }

        // Down
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.href = data.assets[0].browser_download_url;
    } catch (error) {
        console.error('Chyba při získávání verze z GitHubu:', error);
        document.getElementById('syncStatus').textContent = '❌';
        document.getElementById('syncStatus').style.color = 'red';
    }
}

window.onload = () => {
    fetchVersion();
};