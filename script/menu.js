document.addEventListener("DOMContentLoaded", function () {

    const tombolPesan = document.querySelectorAll(".btn-pesan");

    tombolPesan.forEach(function (button) {

        button.addEventListener("click", function () {

            const produk = this.dataset.produk;

            console.log("Produk dipilih:", produk);

            // simpan produk
            localStorage.setItem("produkDipilih", produk);

            // pindah ke halaman order
            window.location.href = "/pages/order/index.html";

        });

    });

});

button.addEventListener("click", function () {
    this.textContent = "✔ Ditambahkan";
});
