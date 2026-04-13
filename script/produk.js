// // STEP 1 : DATA PRODUK
// const dataBarang = [
//     {
//         nama: "Chocolate Cookies",
//         ukuran: "300 gr",
//         harga: 38000
//     },
//     {
//         nama: "Nastar Premium",
//         ukuran: "300 gr",
//         harga: 35000
//     },
//     {
//         nama: "Putri Salju",
//         ukuran: "300 gr",
//         harga: 33000
//     },
//     {
//         nama: "Kue Kacang",
//         ukuran: "300 gr",
//         harga: 28000
//     }
// ];


// // STEP 2 : AMBIL CONTAINER
// const container = document.getElementById("tabel-data");
// const totalHargaElement = document.getElementById("total-harga");


// // cek supaya tidak error di halaman lain
// if (container) {

//     // STEP 3 : RENDER DATA
//     const tabelData = dataBarang.map((barang) => {

//         return `
//     <tr>
//     <td>${barang.nama}</td>
//     <td>${barang.ukuran}</td>
//     <td>Rp ${barang.harga.toLocaleString("id-ID")}</td>
//     </tr>
//     `;

//     }).join("");


//     // tampilkan ke tabel
//     container.innerHTML = tabelData;


//     // STEP 4 : HITUNG TOTAL
//     const totalHarga = dataBarang.reduce((total, barang) => {
//         return total + barang.harga;
//     }, 0);


//     // tampilkan total
//     if (totalHargaElement) {
//         totalHargaElement.innerHTML = "Rp " + totalHarga.toLocaleString("id-ID");
//     }

// }

// DATA KERANJANG
{
    nama: "Nastar Premium",
    harga: 55000,
    qty: 1
  }
  {
    nama: "Chocolate Cookies",
    harga: 55000,
    qt: 1
  }
  {
    nama: "Kue Kacang",
    harga: 48000,
    qt: 1
  }
  {
    nama: "Putri Salju",
    harga: 50000,
    qt: 1
  }
  {
    nama: "Cookies Klasik",
    harga: 50000,
    qt: 1
  }
  {
    nama: "Kastengel",
    harga: 60000,
    qt: 1
  }
  {
    nama: "Moon Mini",
    harga: 100000,
    qt: 1
  }
  {
    nama: "Golden Eid",
    harga: 120000,
    qt: 1
  }
  {
    nama: "Royal Lunara",
    harga: 200000,
    qt: 1
  }
  
// KERANJANG
document.addEventListener("DOMContentLoaded", function(){
    renderKeranjang();
   
function renderKeranjang(){

    const list = document.getElementById("listKeranjang");
    const totalText = document.getElementById("totalHarga");
    
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    
    list.innerHTML = "";
    let total = 0;
    
    keranjang.forEach((item, index) => {
    
    let subtotal = item.harga * item.qty;
    total += subtotal;
    
    const li = document.createElement("li");
    
    li.innerHTML = `
    <b>${item.nama}</b><br>
    Rp ${item.harga} x ${item.qty} = <b>Rp ${subtotal}</b><br>
    
    <button onclick="ubahQty(${index}, -1)">➖</button>
    <button onclick="ubahQty(${index}, 1)">➕</button>
    <button onclick="hapusItem(${index})">❌</button>
    
    <hr>
    `;
    
    list.appendChild(li);
    
    });
    
    totalText.textContent = "Total: Rp " + total;
    
    }
});

// UBAH JUMLAH PRODUK
function tambahKeKeranjang(nama, harga){

    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    
    let existing = keranjang.find(item => item.nama === nama);
    
    if(existing){
        existing.qty += 1;
    }else{
        keranjang.push({nama, harga, qty: 1});
    }
    
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    
    updateCartBadge(); // ⬅️ TAMBAHKAN INI
    animasiAddToCart(); // ⬅️ TAMBAHKAN INI
    
    }
// HAPUS
function hapusItem(index){

    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    
    keranjang.splice(index, 1);
    
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    
    renderKeranjang();
    
    }

    // JUMLAH BAGDE
    document.addEventListener("DOMContentLoaded", function(){
        updateCartBadge();
  
    function updateCartBadge(){

        let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
        
        let total = 0;
        
        keranjang.forEach(item => {
            total += item.qty;
        });
        
        const badge = document.getElementById("cartCount");
        
        if(badge){
            badge.textContent = total;
        }
        
        }
    });