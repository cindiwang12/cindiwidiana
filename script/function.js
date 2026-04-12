document.addEventListener("DOMContentLoaded", function () {

    // ambil elemen
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const promoButton = document.getElementById("togglePromo");
    const promoText = document.getElementById("promoText");
    const form = document.getElementById("orderForm");

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


    // MENU PAKET HAMPERS (mengisi produk otomatis di order)
    const produkSelect = document.querySelector("select");
    const produkDipilih = localStorage.getItem("produkDipilih");

    if (produkSelect && produkDipilih) {
        produkSelect.value = produkDipilih;
    }


    // FORM ORDER
    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const nama = document.getElementById("nama").value;

            alert("Terima kasih " + nama + ", pesanan kamu berhasil dikirim!");

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


// KERANJANG
const list = document.getElementById("listKeranjang");
const totalText = document.getElementById("totalHarga");

if (list) {

    let total = 0;

    keranjang.forEach(function (item) {

        const li = document.createElement("li");
        li.textContent = item.nama + " - Rp " + item.harga;
        list.appendChild(li);

        total += item.harga;

    });

    totalText.textContent = "Total: Rp " + total;

}