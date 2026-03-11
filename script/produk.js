// step 1 : persiapkan Data Produk 
const dataBarang = [
    {
        nama produk: "Chocolate Cookies",
        ukuran: "300 gr"
        harga: 38000,
    },
    {
        nama produk: "Nastar Premium",
        ukuran: "300 gr"
        harga: 35000,
    },
    {
        nama produk: "Putri Salju",
        ukuran: "300 gr"
        harga: 33000,
    },
    {
        nama produk: "Kue Kacang",
        ukuran: "300 gr"
        harga: 28000,
    }
];

// step 2 : persiapkan wadahnya
const container = document.getElementById("tabel-data");

// step 3 : mapping dan render data
const dataReal = dataBarang.map((barang) => {
    return `
    <tr>
    <td>${barang.nama produk}</td>
    <td>${barang.ukuran}</td>
    <td>${barang.harga}</td>
    </tr>
    `

}).join("");

// step 4 : isikan data ke dalam wadah
tabelData.innerHTML = dataReal;