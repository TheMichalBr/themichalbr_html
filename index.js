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
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        // &rel=0&showinfo=0&loop=1&mute=0
        // iframe.width = '1590'; iframe.height = '902';

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

/*window.addEventListener("scroll", function () {
var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);})

function toggle() {
var header = document.querySelector("header");
header.classList.toggle("active");}

$(document).ready(function () {
var HeightDiv = $("div").height();
var HeightTable = $("table").height();
if (HeightTable > HeightDiv) {
var FontSizeTable = parseInt($("table").css("font-size"), 10);
while (HeightTable > HeightDiv && FontSizeTable > 5) {FontSizeTable--; $("table").css("font-size", FontSizeTable);
HeightTable = $("table").height();}}});

const container = document.querySelector(".container");
const primaryNav = document.querySelector(".nav__list");
const toggleButton = document.querySelector(".nav-toggle");
hljs.initHighlightingOnLoad();

toggleButton.addEventListener("click", () => {
const isExpanded = primaryNav.getAttribute("aria-expanded");
primaryNav.setAttribute("aria-expanded", isExpanded === "false" ? "true" : "false");});

container.addEventListener("click", (e) => {
if (!primaryNav.contains(e.target) && !toggleButton.contains(e.target)) {
primaryNav.setAttribute("aria-expanded", "false");}});

window.console = window.console || function (t) { };
var fragment = document.createDocumentFragment();
for(var i =0 ;i<resultArray.length;i++) { var val = resultArray[i];
fragment.appendChild(appendText(val.content, val.id));}
document.getElementById("LogArea").appendChild(fragment);

var text = '';
resultArray.forEach(function (val) {
text += appendText(val.content);});
$('#OutputArea').append(text);

function myFunctionC() {
var copyText = document.getElementById("myInput");
copyText.select();
copyText.setSelectionRange(0, 99999);
navigator.clipboard.writeText(copyText.value);
alert("Copied the text: " + copyText.value);}*/