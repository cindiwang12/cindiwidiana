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
if (container) {

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
    if (totalHargaElement) {
        totalHargaElement.innerHTML = "Rp " + totalHarga.toLocaleString("id-ID");
    }

}

// KERANJANG
let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

function renderCart() {

    const container = document.getElementById("cart-container");
    const totalText = document.getElementById("cart-total");

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    keranjang.forEach((item, index) => {

        const div = document.createElement("div");

        div.innerHTML = `
${item.nama} - Rp ${item.harga} 
<button onclick="kurangItem(${index})">-</button>
${item.qty}
<button onclick="tambahItem(${index})">+</button>
<button onclick="hapusItem(${index})">❌</button>
`;

        container.appendChild(div);

        total += item.harga * item.qty;

    });

    totalText.textContent = "Total: Rp " + total;
    localStorage.setItem("keranjang", JSON.stringify(keranjang));
}

// TAMBAH PRODUK
document.querySelectorAll(".btn-pesan").forEach(btn => {
    btn.addEventListener("click", function () {

        const nama = this.dataset.produk;
        const harga = Number(this.dataset.harga);

        // cek sudah ada atau belum
        const existing = keranjang.find(item => item.nama === nama);

        if (existing) {
            existing.qty++;
        } else {
            keranjang.push({ nama, harga, qty: 1 });
        }

        renderCart();

    });
});

// TAMBAH / KURANG / HAPUS
function tambahItem(index) {
    keranjang[index].qty++;
    renderCart();
}

function kurangItem(index) {
    keranjang[index].qty--;
    if (keranjang[index].qty <= 0) {
        keranjang.splice(index, 1);
    }
    renderCart();
}

function hapusItem(index) {
    keranjang.splice(index, 1);
    renderCart();
}

// LOAD AWAL
renderCart();