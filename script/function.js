document.addEventListener("DOMContentLoaded", function () {

    // ambil elemen
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const promoButton = document.getElementById("togglePromo");
    const promoText = document.getElementById("promoText");

    // variabel promo
    let promoVisible = false;
    let jumlahKlik = 0;


    // HAMBURGER MENU
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }


    // NAVBAR SCROLL EFFECT
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });


    // PROMO BUTTON
    if (promoButton && promoText) {

        promoButton.addEventListener("click", function () {

            jumlahKlik++;

            if (!promoVisible) {
                promoText.style.display = "block";
                promoButton.textContent = "Sembunyikan Promo";
                promoVisible = true;
            } else {
                promoText.style.display = "none";
                promoButton.textContent = "Lihat Promo";
                promoVisible = false;
            }

            console.log("Promo diklik:", jumlahKlik);

        });

    }

});


// CAROUSEL

    const track = document.querySelector(".premium-track");
    const items = document.querySelectorAll(".premium-item");

    if(track && items.length > 0){

        let index = 0;

        function slide(){

            index++;

            if(index >= items.length){
                index = 0;
            }

            track.style.transform = `translateX(-${index * 100}%)`;

        }

        setInterval(slide, 3000);
    }


// Kode signup dan login dihapus karena sudah ada di auth.js dan halaman masing-masing
// untuk menghindari konflik event listener



// Kode tampilkan nama di navbar dihapus karena sudah ada di auth.js