'use strict';

(function () {
    var imgElem = document.querySelector('.img');
    var totalCount = 263;
    var videoFrame = [];
    var loadCount = 0;
    var currentFrame = void 0;
    function setImg() {
        for (var i = 0; i < totalCount; i++) {
            var img = new Image();
            img.src = 'video/05/img_' + i + '.jpg';
            videoFrame.push(img);

            window.addEventListener("load", function () {
                loadCount++;
                if (loadCount === totalCount) {
                    console.log('로드완료');

                    init();
                }
            });
        }
    }

    function init() {

        window.addEventListener('scroll', function () {
            var per = pageYOffset / (document.body.offsetHeight - window.innerHeight);
            if (per > 1) per = 1;
            if (per < 0) per = 0;

            requestAnimationFrame(function () {
                currentFrame = Math.round((totalCount - 1) * per);
                imgElem.src = videoFrame[currentFrame].src;
            });
        });
    }
    setImg();
})();