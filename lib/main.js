'use strict';

(function () {
    var imgElem = document.querySelector('.intro');
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
                    mainSection.classList.add('after-load');
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
            scrub: true,
            markers: {
                startColor: 'blue',
                endColor: 'red'
            },
            onUpdate: function onUpdate() {
                if (mainSection.classList.contains('after-load')) {
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
            end: '+=25000',
            scrub: 1
            // markers: {
            //     startColor: 'blue',
            //     endColor: 'red'
            // }
        }
    });

    introduce.to('body', 0.3, { backgroundColor: '#BBDEFB' }).to('.introduce .bg_main', 0.5, { opacity: 1, scale: 2, ease: "circ.out" }).to('.introduce .txt-1', 0.4, { opacity: 1 }).to('.introduce .txt-1', 0.4, { top: '5%' }, '-=0.2').to('.main .person', 0.5, { opacity: 1, scale: 0.9 }, '-=0.2').to('.introduce .txt-1,.main .person', 0.3, { opacity: 0 }).to('.introduce .bg_main', 0.3, { opacity: 0 }, '-=0.1').to('.introduce .bg_work', 0.3, { opacity: 1 }, '-=0.2').to('.introduce .txt-2', 0.3, { opacity: 1 }).to('.introduce .txt-2', 0.3, { y: -150 }, '-=0.2').to('body', 0.3, { backgroundColor: '#fff' }).to('.work .person', 0.5, { opacity: 1, scale: 1.1 }, '-=0.2').to('.work .person', 0.4, { opacity: 0 }).to('.introduce .txt-3', 0.3, { opacity: 1 }).to('.introduce .txt-3', 0.3, { y: -130 }, '-=0.2').to('.qna .person', 0.4, { opacity: 1 }, '-=0.1');
    // .to('.introduce .word01',0.3,{opacity:1})
    // .to('.introduce .word01',0.3,{y:-100},'-=0.2')
    // .to('.introduce .word02',0.3,{opacity:1})
    // .to('.introduce .word02',0.3,{y:-100},'-=0.2')
    // .to('.introduce .word03',0.3,{opacity:1})
    // .to('.introduce .word03',0.3,{y:-100},'-=0.2')
    // .to('.introduce .txt-2,.introduce .txt-3,.word01,.word02,.word03',0.3,{opacity:0})
    // .to('.introduce .bg_work,.qna .person',0.3,{opacity:0})
    // .to('.introduce .house',0.3,{opacity:1,scale:1.5})
    // .to('.introduce .txt-4',0.3,{opacity:2})
    // .to('.introduce .txt-4',0.3,{y:-400},'-=0.1')
    // .to('.introduce .person.work',0.3,{opacity:1,y:-100})
    // .to('.introduce .main-circle',0.3,{opacity:1},'-=0.1')
    // .to('.introduce .circle1',0.3,{opacity:1})
    // .to('.introduce .circle-container',1,{rotate:'360deg'},)
    // .to('.introduce .line',0.7,{opacity:1},'-=0.8')
    // .to('.introduce .line1',1,{rotate:'800deg'},'-=0.8')
    // .to('.introduce .line2',1,{rotate:'10deg'},'-=1')
    // .to('.introduce .circle2',0.3,{opacity:1},'-=0.5')
    // .to('.introduce .slide',1,{left:'-2200px', ease: "steps(3)"},'-=0.7')
    // .to('.introduce .line',0.3,{opacity:0},'-=0.3')
    // .to('.introduce .txt-5',0.3,{opacity:1})
    // .to('.introduce .txt-5',0.3,{y:-200},'-=0.2')
    // .to('.introduce .slide,.main-circle,.small-circle,.txt-4,.txt-5',0.3,{opacity:0})
    // .to('.person.work',0.3,{opacity:0})
    // .to('.skill .txt-6',0.3,{opacity:1,y:30},'-=0.2')
    // .set('body',{backgroundColor:'#E3F2FD'})
    // .to('.person.ability',0.3,{opacity:1,scale:1},'-=0.1')
    // .to('.h-box',0.3,{height:'93%'},'-=0.2')
    // .to('.h-box span',0.3,{y:50,opacity:1},'-=0.2')
    // .to('.c-box',0.3,{height:'88%'},'-=0.2')
    // .to('.c-box span',0.3,{y:50,opacity:1},'-=0.2')
    // .to('.j-box',0.3,{height:'84%'},'-=0.2')
    // .to('.j-box span',0.3,{y:50,opacity:1},'-=0.2')
    // .to('.v-box',0.3,{height:'86%'},'-=0.2')
    // .to('.v-box span',0.3,{y:50,opacity:1},'-=0.2')
    // .to('.level-up',0.1,{y:-30,opacity:1},'-=0.2')
    // .to('.level-up',0.1,{opacity:0})
    // .to('.h-box span',0.2,{left:'620%',bottom:'80%',rotate:20},'-=0.2')
    // .to('.c-box span',0.2,{left:'243%',bottom:'80%',rotate:-10},'-=0.2')
    // .to('.j-box span',0.2,{left:'-210%',bottom:'80%',rotate:30},'-=0.2')
    // .to('.v-box span',0.2,{left:'-480%',bottom:'80%',rotate:-45},'-=0.2')
    // .to('.skill-box .bar-container',0.3,{opacity:0},'-=0.1')
    // .to('.person.ability',0.3,{opacity:0},'-=0.1')
    // .to('.person.super',0.3,{opacity:1},'-=0.15')
    // .to('.skill .txt-6',0.3,{opacity:0},'-=0.15')
    // .to('.skill .txt-7',0.3,{opacity:1,y:60},'-=0.15')
    // .to('.phone-box',0.1,{opacity:1})
    // .to('.phone-box',0.5,{opacity:1,y:-700},'-=0.1')
    // .to('.project .book',0.3,{left:'120%',top:'-70%',scale:1.5})
    // .to('.project .memo',0.3,{left:'125%',top:'52%',scale:1.5},'-=0.2')
    // .to('.project .cover',0.3,{left:'128%',top:'-70%',scale:1.5},'-=0.2')


    //     anticipatePin: 1,

    // .to('.secene1 .place',{
    //     opacity: 1,
    //     scale:2,
    // },-3)
    // .to('.secene1 .txt',{
    //     opacity: 1,
    //    y:-370
    // })
    // .to('.secene1 .main',{
    //     opacity: 1
    // },-2.8)
    // .to('.secene1 .txt',{
    //     opacity: 0,
    // },-2.5)
    // .to('.secene1 .main',{
    //     opacity: 0,
    // },-2.3)
    // .to('.secene1 .txt-2',{
    //     y:-350,
    // },-2.5)
    // .to('.secene1 .txt-2',{
    //     opacity: 1,
    // },-2.4)
    // .to('.secene1 .work',{
    //     scale:1.5,
    //     opacity: 1
    // },-2.3)
    // .to('.secene1 .place',{
    //     opacity: 0
    // },-2.5)
    // .to('.secene1 .bg_work',{
    //     opacity: 1
    // },-2.5)
    // .to('.secene1 .txt-3',{
    //     opacity: 1
    // },-2)
    // .to('.secene1 .work',0.2,{
    //     opacity: 0
    // },-1.5)
    // .to('.secene1 .qna',0.2,{
    //     opacity: 1
    // },-1.5)
    // .to('.secene1 .word01',0.2,{
    //     y:30,
    //     opacity: 1
    // },-1.2)
    // .to('.secene1 .word02',0.2,{
    //     y:40,
    //     opacity: 1
    // },-1.1)
    // .to('.secene1 .word03',0.2,{
    //     y:70,
    //     opacity: 1
    // },-1)
    // .to('.secene1 .txt-2,.secene1 .txt-3,.secene1 .word01,.secene1 .word02,.secene1 .word03',0.2,{
    //     y:-70,
    //     opacity: 0
    // },-0.5)
    // .to('.secene2 .txt',0.2,{
    //     y:-200,
    //     opacity: 1
    // },-0.4)
    // .to('.secene1 .qna',0.1,{
    //     opacity: 0
    // },-0.4)
    // .to('.secene1 .work',0.2,{
    //     opacity: 1
    // },-0.3)
    // .to('.secene1 .bg_work',0.2,{
    //     opacity: 0
    // },-0.3)
    // .to('.secene2 .bg',0.2,{
    //     opacity: 1
    // })
    // .to('.secene2 .slides',0.1,{
    //     opacity: 1,
    //     scale: 1
    // })
    // .to('.secene2 .line',12,{
    //     height:'60%',
    // })
    // .to('.secene2 .line .text-1',0.3,{
    //     opacity: 1,
    //     top:0
    // },3)
    // .to('.secene2 .line .text-2',0.3,{
    //     opacity: 1,
    //     top:'50%'
    // },6)
    // .to('.secene2 .line .text-3',0.3,{
    //     opacity: 1,
    //     top:'100%'
    // },9)
    // .to('.secene2 .slide',8,{
    //     x:'-300%',
    //     ease: "steps(3)"
    // },4)


    setImg();
})();