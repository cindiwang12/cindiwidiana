document.addEventListener("DOMContentLoaded", function () {

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

const promoButton = document.getElementById("togglePromo");
const promoText = document.getElementById("promoText");

// variabel
let promoVisible = false;
let jumlahKlik = 0;


// HAMBURGER MENU
hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// PROMO BUTTON INTERACTION
promoButton.addEventListener("click", function () {

    jumlahKlik++;

    if(promoVisible === false){
        promoText.style.display = "block";
        promoButton.textContent = "Sembunyikan Promo";
        promoVisible = true;
    }
    else{
        promoText.style.display = "none";
        promoButton.textContent = "Lihat Promo";
        promoVisible = false;
    }

    console.log("Promo diklik:", jumlahKlik);

});

});

//  MENU PAKET HAMPERS
document.addEventListener("DOMContentLoaded", function(){

    const produkSelect = document.querySelector("select");
    const produkDipilih = localStorage.getItem("produkDipilih");
    
    if(produkSelect && produkDipilih){
    produkSelect.value = produkDipilih;
    }
    
    });

// MENU ORDER
document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("orderForm");

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const nama = document.getElementById("nama").value;

        alert("Terima kasih " + nama + ", pesanan kamu berhasil dikirim!");

    });

});