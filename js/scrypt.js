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

  const keyPlayerNext = $(".key-player__nav-next-button");
  const keyPlayerPrev = $(".key-player_nav-prev-button");
  const keyPlayerSlider = $(".key-player__items");
  const slideWidth = 365;

  function shiftSlide(direction) {
    if (keyPlayerSlider.hasClass("transition")) return;
    $(document).off("mouseup");
    keyPlayerSlider
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".key-player__items-item:first").before($(".key-player__items-item:last"));
      } else if (direction === -1) {
        $(".key-player__items-item:last").after($(".key-player__items-item:first"));
      }
      keyPlayerSlider.removeClass("transition");
      keyPlayerSlider.css("transform", "translateX(0px)");
    }, 700);
  }

  keyPlayerNext.on("click", function () {
    shiftSlide(-1);
  });

  keyPlayerPrev.on("click", function () {
    shiftSlide(1);
  });


  const clientsSaySlides = $(".clients-say__slider__item");
  const clientsSayNext = $(".client-say__nav-next-button");
  const clientsSayPrev = $(".client-say__nav-prev-button");
  const clientsSayDots = $(".clients-say_slider-dot");
  let clientSayCount = 0;

  $(clientsSaySlides[0]).addClass("_active");
  $(clientsSayDots[0]).addClass("_checked");

  clientsSayNext.on("click", function () {
    clientSayCount++;
    if (clientSayCount >= clientsSaySlides.length) {
      clientSayCount = 0;
    }
    slide(clientSayCount, clientsSaySlides, clientsSayDots);
  });

  clientsSayPrev.on("click", function () {
    clientSayCount--;
    if (clientSayCount < 0) {
      clientSayCount = clientsSaySlides.length - 1;
    }
    slide(clientSayCount, clientsSaySlides, clientsSayDots);
  });
});
