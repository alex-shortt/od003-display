function getRandRange(min, max) {
    var num = Math.random() * (max - min) + min;
    return parseInt(num);
}

var videos = ["https://dwvo2npct47gg.cloudfront.net/videos/monsterew-cropped.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-1-compressed.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-2.mov",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-concert.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-music.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-home.mp4",
              "https://dwvo2npct47gg.cloudfront.net/videos/rocky-jail.mp4"];

var images = ["https://dwvo2npct47gg.cloudfront.net/images/gallery_41.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_40.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_39.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_38.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_37.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_36.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_35.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_34.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_33.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_32.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_31.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_30.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_29.png",
             "https://dwvo2npct47gg.cloudfront.net/images/gallery_28.png"]

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

function placeVideo(num, src) {
    var id = getIdFromInt(num);
    $(id).empty();
    $(id).append('\ <video class="video" autoplay loop muted poster="https://dwvo2npct47gg.cloudfront.net/gifs/video-loading.gif">\
                        <source src="' + src + '" type="video/mp4"> Your browser does not support the video tag.\
                    </video>\
    ');
}

function placeImage(num, src) {
    var id = getIdFromInt(num);
    $(id).empty();
    $(id).append('\ <div class="image" style="background-image: url(' + src + ');" ></div> ');
}

function randomChange() {
    var num = getRandRange(0, 5);

    if (getRandRange(0, 2) == 0) {
        setOpacity(num, 0);
        setTimeout(function () {
            placeImage(num, images[getRandRange(0, images.length)]);
            setOpacity(num, 1);
            setTimeout(randomChange, getRandRange(5000, 10000));
        }, 1200);
    } else {
        setOpacity(num, 0);
        setTimeout(function () {
            placeVideo(num, videos[getRandRange(0, videos.length)]);
            setOpacity(num, 1);
            setTimeout(randomChange, getRandRange(5000, 10000));
        }, 1200);
    }
}

function setup(){
    placeImage(1, images[getRandRange(0, images.length)]);
    placeImage(2, images[getRandRange(0, images.length)]);
    placeImage(3, images[getRandRange(0, images.length)]);
    placeImage(4, images[getRandRange(0, images.length)]);
    randomChange();
}