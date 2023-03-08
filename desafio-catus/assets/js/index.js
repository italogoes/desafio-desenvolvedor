var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});

function abrirMenu(){
    let menu = document.querySelector('.menu-mobile');
    menu.style.display = 'block'
}

function fecharMenu(){
    let menu = document.querySelector('.menu-mobile');
    menu.style.display = 'none'
}