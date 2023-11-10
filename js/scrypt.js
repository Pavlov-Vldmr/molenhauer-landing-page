// $(document).ready(function () {

const benefitSwiper = new Swiper(".benefitSwiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  fadeEffect: {
    crossFade: true, 
  }, 
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: ".benefit-swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletClass: "benefit_slider-dot",
    bulletActiveClass: "benefit_slider-dot-active",
    bulletElement: "button",
    renderBullet: function (index, className) {
      const benefitSliderDotsText = $(".benefit_slider-dot");
      return (
        '<button class="benefit_slider-dot ' +
        className +
        '">' +
        "<span>" +
        benefitSliderDotsText[index].children[0].textContent +
        "</span> <p>" +
        benefitSliderDotsText[index].children[1].textContent +
        "</p>" +
        "</button>"
      );
    },
  },

  navigation: {
    nextEl: ".benefit-next",
    prevEl: ".benefit-prev",
  },
});

const expirienceSwiper = new Swiper(".expirienceSwiper", {
  direction: "horizontal",
  // loop: true,
  slidesPerView: 6,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grabCursor: true,
    },
    640: {
      slidesPerView: 2,
      grabCursor: true,

      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      grabCursor: true,

      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

const keyPlayerSwiper = new Swiper(".keyPlayerSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  grabCursor: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 3,
      grid: {
        rows: 3,
      },
    },
    425: {
      slidesPerView: 2,
      grabCursor: true,

      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      grabCursor: true,

      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  navigation: {
    nextEl: ".key-player__nav-next-button",
    prevEl: ".key-player__nav-prev-button",
  },
});

const clientsSaySwiper = new Swiper(".clientsSaySwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  effect: "fade",

  fadeEffect: {
    crossFade: true, 
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".client-say__nav-next-button",
    prevEl: ".client-say__nav-prev-button",
  },
});


