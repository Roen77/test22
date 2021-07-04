'use strict';

(function () {
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    var imgElem = document.querySelector('.intro');
    var body = document.querySelector('body');
    var mainSection = document.querySelector('.main_section');
    var totalCount = 250;
    var videoFrame = [];
    var loadCount = 0;
    var currentFrame = void 0;
    function setImg() {
        for (var i = 0; i < totalCount; i++) {
            var img = new Image();
            img.src = 'video/img_' + i + '.jpg';
            videoFrame.push(img);

            window.addEventListener("load", function () {
                loadCount++;
                // 이미지 로드 완료
                if (loadCount === totalCount) {
                    body.classList.add('after-load');
                }
            });
        }
    }

    function init() {
        var mainSectionHeight = mainSection.scrollTop + mainSection.offsetHeight;
        var per = pageYOffset / mainSectionHeight;
        if (per > 1) per = 1;
        if (per < 0) per = 0;

        requestAnimationFrame(function () {
            currentFrame = Math.round((totalCount - 1) * per);
            imgElem.src = videoFrame[currentFrame].src;
        });
    }

    var intro = gsap.timeline({
        scrollTrigger: {
            trigger: '.main_section',
            pin: ".main_section",
            scrub: 1,
            // markers:{
            //     startColor:'blue',
            //     endColor:'red'
            // },
            onUpdate: function onUpdate() {
                if (body.classList.contains('after-load')) {
                    init();
                }
            }
        }
    });

    // intro
    // .to('.main_txt',0.3,{
    //     y:-230,
    // })
    intro.to('.main_txt', 0.5, {
        opacity: 0
    });
    // scroll 
    // let timeline = gsap.timeline();
    // ScrollTrigger.create({
    //     trigger: '.introduce',
    //     pin: '.introduce',
    //     animation: timeline,
    //     start: "top top",
    //     end: "bottom center",
    //     end: "+=3000",
    //     scrub: 1,
    //     markers: {
    //         startColor: 'blue',
    //         endColor: 'red'
    //     }
    // })


    var introduce = gsap.timeline({
        scrollTrigger: {
            trigger: '.fix.introduce',
            pin: '.fix.introduce',
            start: 'top top',
            end: '+=18000',
            scrub: 1
            // markers: {
            //     startColor: 'blue',
            //     endColor: 'red'
            // }
        }
    });

    introduce.to('body', 0.3, { backgroundColor: '#BBDEFB' }).to('.introduce .bg_main', 0.5, { opacity: 1, scale: 2, ease: "circ.out" }).to('.introduce .txt-1', 0.3, { opacity: 1 }).to('.introduce .txt-1', 0.3, { top: '3%' }, '-=0.2').to('.main .person', 0.5, { opacity: 1, scale: 0.9 }, '-=0.2').to('.introduce .txt-1,.main .person', 0.3, { opacity: 0 }).to('.introduce .bg_main', 0.3, { opacity: 0 }, '-=0.1').to('.introduce .bg_work', 0.3, { opacity: 1 }, '-=0.2').to('.introduce .txt-2', 0.3, { opacity: 1 }).to('.introduce .txt-2', 0.3, { top: '2%' }, '-=0.2').to('body', 0.3, { backgroundColor: '#EDE7F6' }).to('.work .person', 0.5, { opacity: 1, scale: 1.1 }, '-=0.2').to('.work .person', 0.4, { opacity: 0 }).to('.introduce .txt-3', 0.3, { opacity: 1 }).to('.introduce .txt-3', 0.3, { top: '15%' }, '-=0.2').to('.qna .person', 0.4, { opacity: 1 }, '-=0.1').to('.introduce .word01', 0.3, { opacity: 1 }).to('.introduce .word01', 0.3, { y: -10 }, '-=0.2').to('.introduce .word02', 0.3, { opacity: 1 }).to('.introduce .word02', 0.3, { y: -10 }, '-=0.2').to('.introduce .word03', 0.3, { opacity: 1 }).to('.introduce .word03', 0.3, { y: -10 }, '-=0.2').to('.introduce .txt-2,.introduce .txt-3,.word01,.word02,.word03', 0.3, { opacity: 0, y: 100 }).to('.introduce .bg_work,.qna .person', 0.3, { opacity: 0 })
    // .to('.introduce .house',0.3,{opacity:1,scale:1.5})
    .addLabel("start").to('.introduce .txt-4', 0.3, { opacity: 1, y: 20 }).to('.introduce .main-circle', 0.3, { opacity: 1 }).to('.introduce .circle-container,.introduce .line1', 0.7, { rotate: '360deg', repeat: 4 }).to('.introduce .line2', 0.7, { rotate: '10deg' }, '-=0.6').to('.introduce .circle1,.summer', 0.2, { opacity: 1 }, '-=1.5').to('.introduce .circle2,.fall', 0.2, { opacity: 1 }, '-=1').to('.winter', 0.2, { opacity: 1 }, '-=0.2').addLabel("end").to('.introduce .line1,.center-circle,.introduce .line2', 0.6, { opacity: 1 }, '-=3.5').to('.work .person', 0.1, { opacity: 1 }, '-=3').to('.introduce .txt-5', 0.3, { opacity: 1, top: '15%' }, '-=0.2').to('.introduce .slide,.main-circle,.small-circle,.txt-4,.txt-5', 0.3, { opacity: 0 }).to('.work .person', 0.3, { opacity: 0 })
    // .to('.introduce .txt-10',0.3,{opacity:1,top:'10%'})
    .to('.introduce .txt-6', 0.3, { opacity: 1, top: '10%' }, '-=0.2').set('body', { backgroundColor: '#F3E5F5' }).to('.ability .person', 0.3, { opacity: 1, scale: 0.8 }).to('.h-box .html', 0.3, { height: '93%' }, '-=0.2').to('.h-box span', 0.3, { y: 50, opacity: 1 }, '-=0.2').to('.c-box .css', 0.3, { height: '88%' }, '-=0.2').to('.c-box span', 0.3, { y: 50, opacity: 1 }, '-=0.2').to('.j-box .js', 0.3, { height: '84%' }, '-=0.2').to('.j-box span', 0.3, { y: 50, opacity: 1 }, '-=0.2').to('.v-box .vue', 0.3, { height: '86%' }, '-=0.2').to('.v-box span', 0.3, { y: 50, opacity: 1 }, '-=0.2').to('.level-up', 0.1, { y: -50, opacity: 1 }, '-=0.2').to('.level-up', 0.1, { opacity: 0 }).set('.skill-box>div span', { opacity: 0 }).to('.skill-box>div .bar-container', 0.3, { height: '200%' }).to('.ability .person', 0.3, { opacity: 0 }, '-=0.1').to('.super .person', 0.3, { opacity: 1, scale: 1.2 }, '-=0.2').to('.introduce .txt-6', 0.3, { opacity: 0 }).to('.introduce .txt-7', 0.3, { opacity: 1, top: '4%' }).to('.introduce .txt-8', 0.3, { opacity: 1, top: '15%' }).to('.phone-box', 0.3, { opacity: 1, y: -800, ease: Expo.easeInOut }, '-=0.1').to('.phone-box', 0.3, { scale: 1.3 }).to('.phone-box', 0.3, { y: 900, ease: Expo.easeInOut });

    gsap.from(".book-con", {
        scrollTrigger: ".book-con",
        x: 200,
        opacity: 0,
        scrub: 3,
        duration: 1
    });
    gsap.from(".memo-con", {
        scrollTrigger: ".memo-con",
        x: 200,
        opacity: 0,
        scrub: 3,
        duration: 1
    }, 0.2);
    gsap.from(".cover-con", {
        scrollTrigger: ".cover-con",
        x: 200,
        opacity: 0,
        scrub: 3,
        duration: 1
    }, 0.4);

    setImg();
})();