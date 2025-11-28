document.addEventListener('DOMContentLoaded', () => {
  // Swiper Initialization
  const featuredCarsSwiper = new Swiper('.featuredCarsSwiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
   // Testimonials Swiper – separate instance
  const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.testimonials-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonials-next',
      prevEl: '.testimonials-prev',
    },
    effect: 'slide',
    speed: 800,
  });

  // GLightbox Initialization
//   const lightbox = GLightbox({
//     selector: '.glightbox'
//   });
});


