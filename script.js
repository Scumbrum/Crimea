const swiper = new Swiper('.swiper', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    mousewheel: {
        releaseOnEdges: true,
    },
    breakpoints: {
        750: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    }
  });


  const swiper2 = new Swiper('.swiper--nav', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    mousewheel: {
        releaseOnEdges: true,
    },
    navigation: {
        nextEl: ".comments__right",
        prevEl: ".comments__left"
    },
    breakpoints: {
        750: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
  });

  const swiper3 = new Swiper('.swiper--gallery', {
    slidesPerView: 1,
    mousewheel: {
        releaseOnEdges: true,
    },
    autoplay: true
  });

  const swiper4 = new Swiper('.swiper--calendar', {
    slidesPerView: 1,
    direction: "vertical",
    spaceBetween: 100,
    mousewheel: {
        releaseOnEdges: true,
    },
  });

  const swiper5 = new Swiper('.swiper--category', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    mousewheel: {
        releaseOnEdges: true,
    },
  });

  const swiper6 = new Swiper('.swiper--nav-category', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    navigation: {
        nextEl: ".category__right",
        prevEl: ".category__left"
    },
  });