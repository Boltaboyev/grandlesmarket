let loader = document.querySelector(".loader"),
    body = document.querySelector("body")
window.addEventListener("load", () => {
    loader.classList.add("loader_active")
    let interval = setInterval(removeLoader, 300)

    function removeLoader() {
        body.removeChild(loader)
        clearInterval(interval)
    }

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
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    })
})
