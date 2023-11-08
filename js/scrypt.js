// $(document).ready(function () {
// const benefitSlides = $(".benefit-slider-item");
// const benefitNext = $(".benefit-next");
// const benefitPrev = $(".benefit-prev");
// console.log(benefitNext)
const benefitSliderDotsText = $(".benefit_slider-dot");
benefitSliderDotsText.each((el) => {
  // console.log(el)
  console.log(benefitSliderDotsText[el].children[0].textContent);
  console.log(benefitSliderDotsText[el].children[1].textContent);
});

const swiper = new Swiper(".benefitSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  bulletClass: ".benefit_slider-dot",
  bulletActiveClass: ".benefit_slider-dot-active",
  // If we need pagination
  pagination: {
    el: ".benefit-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<button class="benefit_slider-dot ' +  className +  '">' +
            "<span>" +  (benefitSliderDotsText[index].children[0].textContent) +  "</span> <span>"+ (benefitSliderDotsText[index].children[1].textContent) + '</span>' +
        "</button>"
      );
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".benefit-next",
    prevEl: ".benefit-prev",
  },
});

// benefitNext.on("click", function () {
//   console.log("test");
// });

// swiper();
// });
