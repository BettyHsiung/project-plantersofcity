let isOpened = false;
const $navbar = document.querySelector('.l-navbar');
const $navbarBody = document.querySelector('.l-navbar__body');
const $burger = document.querySelector('.o-burger');
function toggleBurger() {
  if (!isOpened) {
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
    setTimeout(function() {
      $navbarBody.style.overflow = 'auto';
    }, 1000)
  } else {
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    $navbarBody.style.overflow = '';
    isOpened = false;
  }
}

// Go Top
function gotop(y, duration = 1000) {
  const initialY = document.documentElement.scrollTop || document.body.scrollTop;
  const baseY = (initialY + y) * 0.5;
  const difference = initialY - baseY;
  const startTime = performance.now();
  const step = () => {
    let normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) {
      normalizedTime = 1;
    }
    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}



const mySwiper = new Swiper('.l-header__swiper', {
  loop: true,
  // 緩慢施放
  longSwipesRatio: 0.1,
  speed: 1600,
	autoplay: {
    delay: 3000,
    // 手動拖曳後不取消自動撥放
    disableOnInteraction: false,
  },
})


const serviceSwiperImg = new Swiper('.l-service__swiper.--img', {
  longSwipesRatio: 0.1,
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 60
})
const serviceSwiperContent = new Swiper('.l-service__swiper.--content', {
  longSwipesRatio: 0.1,
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 1,
  // breakpoints: {
  //   1366: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 15,
  //   },
  // },
  // on: {
  //   init: function() {
  //     lazyLoad.update()
  //   },
  // },
  navigation: {
    prevEl: '.l-service__btn.--prev',
    nextEl: '.l-service__btn.--next',
  },
})

serviceSwiperContent.controller.control = serviceSwiperImg; //Swiper1控制Swiper2，需要在Swiper2初始化后
serviceSwiperImg.controller.control = serviceSwiperContent; //Swiper2控制Swiper1，需要在Swiper1初始化后
