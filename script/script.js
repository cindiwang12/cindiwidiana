const judul = document.getElementById
("judulProduk");
const detail = document.querySelector
("detailProduk");
const harga = document.querySelector(".hargaProduct");

console.log(judul);
console.log(detail);
console.log(harga);

if (judul) {
    judul.textContent = "Contoh judul"
}

if (harga) {
    harga.textContent = "Rp 99.000"
}

if (header) {
    header.innerHTML = `
    <div>
    <h1>
    `
}