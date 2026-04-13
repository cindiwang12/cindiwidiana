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


// SIGN UP
const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", function(e){
e.preventDefault();

console.log("SIGNUP DIKLIK");

const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

let existing = users.find(u => u.email === email);

if(existing){
    alert("Email sudah terdaftar ❌");
    return;
}

users.push({nama, email, password});

localStorage.setItem("users", JSON.stringify(users));

alert("Berhasil daftar 🎉");

// ⬇️ WAJIB INI
window.location.href = "login.html";

});

}

// LOGIN
const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){
e.preventDefault();

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

let user = users.find(u => u.email === email && u.password === password);

if(user){

localStorage.setItem("userLogin", JSON.stringify(user));

alert("Login berhasil 🎉");

// ⬇️ INI YANG PENTING
window.location.href = "../index.html";

}else{
alert("Email / password salah ❌");
}

});

}



// TAMPILKAN NAMA DI NAVBAR
document.addEventListener("DOMContentLoaded", function(){

    const user = JSON.parse(localStorage.getItem("userLogin"));
    
    if(user){
    
    const auth = document.querySelector(".auth");
    
    auth.innerHTML = `
    <span>👋 ${user.nama}</span>
    <button onclick="logout()">Logout</button>
    `;
    
    }
    
    });

    // LOG OUT
    function logout(){

        localStorage.removeItem("userLogin");
        
        alert("Logout berhasil");
        
        location.reload();
        
        }