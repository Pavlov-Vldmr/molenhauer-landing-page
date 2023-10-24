$(document).ready(function () {
  const benefitSlides = $(".benefit-slider-item");
  const benefitNext = $(".benefit-next");
  const benefitPrev = $(".benefit-prev");
  const benefitDots = $(".benefit_slider-dot");
  let benefitCount = 0;

  $(benefitSlides[0]).addClass("_active");
  $(benefitDots[0]).addClass("_checked");

  function slide(current, slides, dots) {
    slides.each(function (index) {
      if (index == current) {
        $(this).addClass("_active").fadeIn("slow");
      } else {
        $(this).removeClass("_active");
      }
    });
    dots.each(function (index) {
      if (index == current) {
        $(this).addClass("_checked");
      } else {
        $(this).removeClass("_checked");
      }
    });
  }
  benefitDots.each(function (index) {
    $(this).on("click", function () {
      slide(index, benefitSlides, benefitDots);
    });
  });

  benefitNext.on("click", function () {
    benefitCount++;
    if (benefitCount >= benefitSlides.length) {
      benefitCount = 0;
    }
    slide(benefitCount, benefitSlides, benefitDots);
  });

  benefitPrev.on("click", function () {
    benefitCount--;
    if (benefitCount < 0) {
      benefitCount = benefitSlides.length - 1;
    }
    slide(benefitCount, benefitSlides, benefitDots);
  });
});
