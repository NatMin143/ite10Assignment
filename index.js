
//first swiper - country images
var swiper = new Swiper('#swiper-1', {
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    lazyLoading: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    loop: true,

});

//  Second swiper - menus
var menuSwiper = new Swiper('#tr-menu-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 1,
    allowTouchMove: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        480: {
            slidesPerView: 3,
            allowTouchMove: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 2,
            allowTouchMove: true
        }
    }
});

//for the border-bottom of the active button to be color red
const buttons = document.querySelectorAll('button');
console.log(buttons);

// CLicking the menu makes the bottom part of it color red which means active
buttons.forEach(function (button) {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

//This part is to show the descriptions according to what button is clicked
//I manually do this because I notice that the variable "buttons" has duplicate element due to swiper loop"
const bt1 = document.querySelector('#button1');
const bt2 = document.querySelector('#button2');
const bt3 = document.querySelector('#button3');
const bt4 = document.querySelector('#button4');
const bt5 = document.querySelector('#button5');
const bt6 = document.querySelector('#button6');
const bt7 = document.querySelector('#button17');
const bt8 = document.querySelector('#button18');
const bt9 = document.querySelector('#button9');
const parag = document.querySelectorAll('.info1, .info2, .info3, .info4, .info5, .info6, .info7, .info8, .info9');


let butns = [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9];

butns[0].addEventListener('click', () => {
    parag[0].style.display = 'block';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';

})

butns[1].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'block';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[2].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'block';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[3].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'block';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[4].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'block';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[5].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'block';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[6].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'block';
    parag[7].style.display = 'none';
    parag[8].style.display = 'none';
})

butns[7].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'block';
    parag[8].style.display = 'none';
    console.log('clicked')
})

butns[8].addEventListener('click', () => {
    parag[0].style.display = 'none';
    parag[1].style.display = 'none';
    parag[2].style.display = 'none';
    parag[3].style.display = 'none';
    parag[4].style.display = 'none';
    parag[5].style.display = 'none';
    parag[6].style.display = 'none';
    parag[7].style.display = 'none';
    parag[8].style.display = 'block';
})


//Swiper 3 - for tourist spots images per country
var swiper3 = new Swiper(".swiper-3", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loopedSlides: 6,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },

        1000: {
            slidesPerView: 4,
        },

        750: {
            slidesPerView: 3
        },

        500: {
            slidesPerView: 2,
        },

        100: {
            slidesPerView: 1,
        }
    }
});


// tourist spots images clicked
const tr = document.querySelectorAll('.tr1, .tr2, .tr3, .tr4, .tr5, .tr6, .tr7, .tr8, .tr9')

butns[0].addEventListener('click', () => {
    tr[0].style.display = 'block';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[1].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'block';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[2].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'block';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[3].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'block';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[4].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'block';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[5].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'block';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[6].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'block';
    tr[7].style.display = 'none';
    tr[8].style.display = 'none';
})

butns[7].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'block';
    tr[8].style.display = 'none';
})

butns[8].addEventListener('click', () => {
    tr[0].style.display = 'none';
    tr[1].style.display = 'none';
    tr[2].style.display = 'none';
    tr[3].style.display = 'none';
    tr[4].style.display = 'none';
    tr[5].style.display = 'none';
    tr[6].style.display = 'none';
    tr[7].style.display = 'none';
    tr[8].style.display = 'block';
})









