document.addEventListener("DOMContentLoaded", function () {

    // Tunggu sampai cartManager siap
    function initMenuHandlers() {
        if (!window.cartManager) {
            console.log('Menunggu cartManager siap di menu.js...');
            setTimeout(initMenuHandlers, 100);
            return;
        }

        // Handle tombol tambah ke keranjang
        const tombolTambahCart = document.querySelectorAll(".btn-add-cart");

        tombolTambahCart.forEach(function (button) {
            button.addEventListener("click", function () {
                const produk = this.dataset.produk;
                const harga = this.dataset.harga;

                // Tambahkan ke keranjang
                cartManager.addProduct(produk, harga);
            });
        });

        console.log('Menu handlers initialized');
    }

    initMenuHandlers();

    // Handle tombol pesan lama (jika masih ada)
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
