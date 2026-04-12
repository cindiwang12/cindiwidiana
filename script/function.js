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


// // SLIDER PRODUK
// const slider = document.getElementById("slider");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// if (nextBtn && prevBtn) {

//     nextBtn.addEventListener("click", function () {
//         slider.scrollBy({ left: 300, behavior: "smooth" });
//     });

//     prevBtn.addEventListener("click", function () {
//         slider.scrollBy({ left: -300, behavior: "smooth" });
//     });

// }

// setInterval(() => {
//     slider.scrollBy({ left: 250, behavior: "smooth" });
// }, 4000);

// // SLIDER FULL
// const slides = document.getElementById("heroSlides");

// let index = 0;

// function autoSlide(){

// index++;

// if(index >= 3){
// index = 0;
// }

// slides.style.transform = `translateX(-${index * 100}%)`;

// }

// setInterval(autoSlide, 4000);

// // NAVIGASI KIRI KANAN
// document.querySelector(".next").addEventListener("click", function(){
//     index++;
//     if(index > 2) index = 0;
//     slides.style.transform = `translateX(-${index * 100}%)`;
//     });

//     document.querySelector(".prev").addEventListener("click", function(){
//     index--;
//     if(index < 0) index = 2;
//     slides.style.transform = `translateX(-${index * 100}%)`;
//     });

// // SLIDER + DOT + TEXT
// const slides = document.getElementById("heroSlides");
// const dots = document.querySelectorAll(".dot");
// const slideItems = document.querySelectorAll(".slide-item");

// let index = 0;

// function showSlide(i) {

//     index = i;

//     // geser slider
//     slides.style.transform = `translateX(-${index * 100}%)`;

//     // update dot
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");

//     // update animasi text
//     slideItems.forEach(item => item.classList.remove("active"));
//     slideItems[index].classList.add("active");

// }

// // AUTO SLIDE
// setInterval(() => {
//     index++;
//     if (index >= slideItems.length) {
//         index = 0;
//     }
//     showSlide(index);
// }, 4000);

// // CLICK DOT
// dots.forEach((dot, i) => {
//     dot.addEventListener("click", function () {
//         showSlide(i);
//     });
// });

// // INIT
// showSlide(0);

// // TOMBOL NEXT/PREVIEW SEKALIGUS UPDATE
// document.querySelector(".next").addEventListener("click", function () {
//     index++;
//     if (index >= slideItems.length) index = 0;
//     showSlide(index);
// });

// document.querySelector(".prev").addEventListener("click", function () {
//     index--;
//     if (index < 0) index = slideItems.length - 1;
//     showSlide(index);
// });

// // MOBILE FRIENDLY
// let startX = 0;
// let endX = 0;

// const sliderArea = document.querySelector(".hero-slider");

// if (sliderArea) {

//     sliderArea.addEventListener("touchstart", function (e) {
//         startX = e.touches[0].clientX;
//     });

//     sliderArea.addEventListener("touchmove", function (e) {
//         endX = e.touches[0].clientX;
//     });

//     sliderArea.addEventListener("touchend", function () {

//         let diff = startX - endX;

//         // swipe kiri
//         if (diff > 50) {
//             index++;
//             if (index >= slideItems.length) index = 0;
//             showSlide(index);
//         }

//         // swipe kanan
//         else if (diff < -50) {
//             index--;
//             if (index < 0) index = slideItems.length - 1;
//             showSlide(index);
//         }

//     });

// }

// // PARRALAX
// window.addEventListener("scroll", function(){

//     const slide = document.querySelector(".hero-slider");
//     const img = document.querySelectorAll(".slide-item img");
    
//     let offset = slide.offsetTop;
//     let scroll = window.scrollY - offset;
    
//     img.forEach(el=>{
//     el.style.transform = `translateY(${scroll * 0.15}px) scale(1.1)`;
//     });
    
//     });

 // CAROUSEL 
//  document.addEventListener("DOMContentLoaded", function(){

//     const track = document.getElementById("carouselTrack");
//     const dotsContainer = document.getElementById("carouselDots");
    
//     if(track && dotsContainer){
    
//     const items = document.querySelectorAll(".carousel-item");
//     let index = 0;
//     let interval;
    
//     const itemWidth = items[0].offsetWidth + 20;
    
//     // DOTS
//     items.forEach((_, i) => {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
    
//     if(i === 0) dot.classList.add("active");
    
//     dot.addEventListener("click", () => {
//     index = i;
//     updateCarousel();
//     });
    
//     dotsContainer.appendChild(dot);
//     });
    
//     const dots = document.querySelectorAll(".dot");
    
//     // UPDATE
//     function updateCarousel(){
//     track.scrollTo({
//     left: index * itemWidth,
//     behavior: "smooth"
//     });
    
//     dots.forEach(dot => dot.classList.remove("active"));
//     if(dots[index]) dots[index].classList.add("active");
//     }
    
//     // AUTO SLIDE
//     function startAutoSlide(){
//     interval = setInterval(() => {
//     index++;
//     if(index >= items.length) index = 0;
//     updateCarousel();
//     }, 3000);
//     }
    
//     function stopAutoSlide(){
//     clearInterval(interval);
//     }
    
//     startAutoSlide();
    
//     // PAUSE HOVER
//     track.addEventListener("mouseenter", stopAutoSlide);
//     track.addEventListener("mouseleave", startAutoSlide);
    
//     // ===================
//     // SWIPE DESKTOP
//     // ===================
//     let isDown = false;
//     let startX;
//     let scrollLeft;
    
//     track.addEventListener("mousedown", (e) => {
//     isDown = true;
//     startX = e.pageX - track.offsetLeft;
//     scrollLeft = track.scrollLeft;
//     stopAutoSlide();
//     });
    
//     track.addEventListener("mouseleave", () => {
//     isDown = false;
//     startAutoSlide();
//     });
    
//     track.addEventListener("mouseup", () => {
//     isDown = false;
//     startAutoSlide();
//     });
    
//     track.addEventListener("mousemove", (e) => {
//     if(!isDown) return;
    
//     e.preventDefault();
    
//     const x = e.pageX - track.offsetLeft;
//     const walk = (x - startX) * 1.5;
    
//     track.scrollLeft = scrollLeft - walk;
//     });
    
//     // ===================
//     // SWIPE MOBILE
//     // ===================
//     let startTouchX = 0;
    
//     track.addEventListener("touchstart", (e) => {
//     startTouchX = e.touches[0].clientX;
//     stopAutoSlide();
//     });
    
//     track.addEventListener("touchend", (e) => {
    
//     let endX = e.changedTouches[0].clientX;
//     let diff = startTouchX - endX;
    
//     if(diff > 50){
//     index++;
//     }
//     else if(diff < -50){
//     index--;
//     }
    
//     if(index < 0) index = 0;
//     if(index >= items.length) index = items.length - 1;
    
//     updateCarousel();
//     startAutoSlide();
    
//     });
    
//     }
    
//     });


// document.addEventListener("DOMContentLoaded", function(){

//     const track = document.querySelector(".premium-track");
//     const items = document.querySelectorAll(".premium-item");
    
//     let index = 0;
    
//     function slide(){
    
//     index++;
    
//     if(index >= items.length){
//     index = 0;
//     }
    
//     track.style.transform = `translateX(-${index * 100}%)`;
    
//     }
    
//     // AUTO SLIDE
//     setInterval(slide, 3000);
    
//     });

//     function updateActive(){
// items.forEach(item => item.classList.remove("active"));
// items[index].classList.add("active");
// }

// function slide(){

// index++;
// if(index >= items.length){
// index = 0;
// }

// track.style.transform = `translateX(-${index * 100}%)`;

// updateActive();
// }

// updateActive();

document.addEventListener("DOMContentLoaded", function(){

    const track = document.querySelector(".premium-track");
    const items = document.querySelectorAll(".premium-item");
    
    let index = 0;
    
    function slide(){
    
    index++;
    
    if(index >= items.length){
    index = 0;
    }
    
    track.style.transform = `translateX(-${index * 100}%)`;
    
    }
    
    setInterval(slide, 3000);
    
    });
    
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