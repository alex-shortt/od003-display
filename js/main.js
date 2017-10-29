/*
var videos = ["https://dwvo2npct47gg.cloudfront.net/videos/monsterew-cropped.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-1-compressed.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-2.mov",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-concert.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-music.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-home.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-jail.mp4"];

function placeVideo(num, src) {
    var id = getIdFromInt(num);
    $(id).empty();
    $(id).append('\ <video class="video" autoplay loop muted poster="https://dwvo2npct47gg.cloudfront.net/gifs/video-loading.gif">\
                        <source src="' + src + '" type="video/mp4"> Your browser does not support the video tag.\
                    </video>\
    ');
}
*/

var minSwitchTime = 3500;
var maxSwitchTime = 5300;
var lastCellSwitched = 1;
var urlPrefix = "http://code.bcp.org/students/openHouse/img17/";

function getRandRange(min, max) {
    var num = Math.random() * (max - min) + min;
    return parseInt(num);
}


var images = ["Capture.PNG",
             "IMG_0995.jpg",
             "IMG_1002.jpg",
             "IMG_1008.jpg",
             "apCollab01.jpg",
             "apCollab02.jpg",
             "apCollab03.jpg",
             "apCollab04.jpg",
             "apCollab05.jpg",
             "apCollab06.jpg",
             "apCollab07.jpg",
             "apclass01.jpg",
             "cad01.jpg",
             "cad02.jpg",
             "cad03.jpg",
             "cad04.jpg",
             "capture2.png",
             "dsCollab02.jpg",
             "dsCollab03.jpg",
             "dsCollab05.jpg",
             "dsPresents01.jpg",
             "ds_battleship.png",
             "ds_gia_audio.png",
             "ds_herb-rosi.png",
             "ds_joel1.png",
             "ds_joel2.png",
             "dsclass01.jpg",
             "groupChat_Sen.png",
             "turtleRun_Naza.png",
             "webDesign_jacob1.png",
             "webDesign_jacobLic1.png",
             "webDesign_jared.png",
             "webappsCollab01.jpg",
             "webappsCollab02.jpg"];

var animations = ["moveNW",
                 "moveSW",
                 "moveNE",
                 "moveSE",
                 "none",
                 "none"];


function getIdFromInt(num) {
    switch (num) {
        case 1:
            return "#container-top-left";
        case 2:
            return "#container-top-right";
        case 3:
            return "#container-bottom-left";
        case 4:
            return "#container-bottom-right";
        default:
            return null;
    }
}

function setOpacity(num, opacity) {
    var id = getIdFromInt(num);
    $(id).css("opacity", opacity);
}

function placeImage(num, src) {
    var id = getIdFromInt(num);
    $(id).empty();
    $(id).append('\ <div class="image" style="background-image: url(' + urlPrefix + src + ');" ></div> ');
    $(id + " > div").css("animation", getRandRange(25, 100) + "s linear " + animations[getRandRange(0, animations.length)]);
}

function sourceExists(src) {
    for (var i = 0; i < $(".content-container > div").length; i++) {
        var elem = $(".content-container > div")[i];
        if ($(elem).css("background-image") == 'url("' + src + '")') {
            return true;
        }
    }
    return false;
}

function randomChange() {
    var num = getRandRange(0, 5);
    var src = images[getRandRange(0, images.length)];

    while (num == lastCellSwitched) {
        num = getRandRange(0, 5);
    }
    lastCellSwitched = num;

    while (sourceExists(src)) {
        src = images[getRandRange(0, images.length)];
    }

    setOpacity(num, 0);
    setTimeout(function (src) {
        placeImage(num, src);
        setOpacity(num, 1);
        setTimeout(randomChange, getRandRange(minSwitchTime, maxSwitchTime));
    }, 1200, src);
}

function setup() {
    placeImage(1, images[getRandRange(0, images.length)]);
    placeImage(2, images[getRandRange(0, images.length)]);
    placeImage(3, images[getRandRange(0, images.length)]);
    placeImage(4, images[getRandRange(0, images.length)]);
    randomChange();
}
