// Hamburger animation -------------------------------------------------------------------------
document.getElementById("menu-icon").addEventListener("click", function () {
    this.classList.toggle("active")
})

// Swiper -------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    loop: true,

    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
})
