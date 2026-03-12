// STEP 1 : DATA PRODUK
const dataBarang = [
    {
    nama: "Chocolate Cookies",
    ukuran: "300 gr",
    harga: 38000
    },
    {
    nama: "Nastar Premium",
    ukuran: "300 gr",
    harga: 35000
    },
    {
    nama: "Putri Salju",
    ukuran: "300 gr",
    harga: 33000
    },
    {
    nama: "Kue Kacang",
    ukuran: "300 gr",
    harga: 28000
    }
    ];
    
    
    // STEP 2 : AMBIL CONTAINER
    const container = document.getElementById("tabel-data");
    const totalHargaElement = document.getElementById("total-harga");
    
    
    // cek supaya tidak error di halaman lain
    if(container){
    
    // STEP 3 : RENDER DATA
    const tabelData = dataBarang.map((barang) => {
    
    return `
    <tr>
    <td>${barang.nama}</td>
    <td>${barang.ukuran}</td>
    <td>Rp ${barang.harga.toLocaleString("id-ID")}</td>
    </tr>
    `;
    
    }).join("");
    
    
    // tampilkan ke tabel
    container.innerHTML = tabelData;
    
    
    // STEP 4 : HITUNG TOTAL
    const totalHarga = dataBarang.reduce((total, barang) => {
    return total + barang.harga;
    }, 0);
    
    
    // tampilkan total
    if(totalHargaElement){
    totalHargaElement.innerHTML = "Rp " + totalHarga.toLocaleString("id-ID");
    }
    
    }