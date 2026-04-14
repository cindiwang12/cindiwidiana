// ============================================
// HALAMAN ORDER & CHECKOUT
// ============================================

function initOrderPage() {
    if (!window.cartManager) {
        console.log('Menunggu cartManager siap...');
        setTimeout(initOrderPage, 100);
        return;
    }

    const checkoutForm = document.getElementById("checkoutForm");
    const orderNotice = document.getElementById("order-notice");
    const orderCartInfo = document.getElementById("order-cart-info");

    updateOrderInfo();

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function(e) {
            e.preventDefault();
            handleCheckout();
        });
    }

    function updateOrderInfo() {
        const cart = cartManager.getCart();
        const itemCount = cartManager.getItemCount();
        const totalPrice = cartManager.getTotal();

        if (orderCartInfo) {
            if (itemCount === 0) {
                orderCartInfo.innerHTML = '<p class="empty-cart-note">Keranjang Anda masih kosong.</p>';
            } else {
                orderCartInfo.innerHTML = `<p class="order-cart-info-text">Anda memiliki <strong>${itemCount} item</strong> di keranjang dengan total <strong>${cartManager.formatPrice(totalPrice)}</strong>.</p>`;
            }
        }

        if (orderNotice) {
            if (itemCount === 0) {
                orderNotice.textContent = 'Keranjang kosong. Silakan tambahkan produk lewat tombol keranjang terlebih dahulu.';
                orderNotice.classList.add('notice-warning');
            } else {
                orderNotice.textContent = 'Pastikan barang sudah ditambahkan ke keranjang sebelum checkout.';
                orderNotice.classList.remove('notice-warning');
            }
        }
    }

    function handleCheckout() {
        const customerName = document.getElementById("customer-name").value.trim();
        const customerPhone = document.getElementById("customer-phone").value.trim();
        const customerAddress = document.getElementById("customer-address").value.trim();
        const customerNotes = document.getElementById("customer-notes").value.trim();
        const deliveryDate = document.getElementById("delivery-date").value;

        if (!customerName) {
            alert("Nama lengkap harus diisi!");
            return;
        }

        if (!customerPhone) {
            alert("Nomor WhatsApp harus diisi!");
            return;
        }

        if (cartManager.getCart().length === 0) {
            alert("Keranjang Anda kosong! Silakan tambahkan produk ke keranjang terlebih dahulu.");
            window.location.href = "/pages/cart";
            return;
        }

        const message = buildOrderMessage(customerName, customerPhone, customerAddress, customerNotes, deliveryDate);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6283149466923?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    }

    function buildOrderMessage(name, phone, address, notes, deliveryDate) {
        const cart = cartManager.getCart();

        if (cart.length === 0) {
            return null;
        }

        let message = "🌙 *PESANAN LUNARA BAKES* 🌙\n\n";
        message += "═══════════════════════════════════\n";
        message += "*📦 RINCIAN PRODUK:*\n";
        message += "───────────────────────────────────\n";

        let total = 0;
        cart.forEach((item, index) => {
            const subtotal = item.harga * item.qty;
            message += `${index + 1}. ${item.nama}\n`;
            message += `   Qty: ${item.qty} pcs × Rp ${cartManager.formatPriceSimple(item.harga)}\n`;
            message += `   Subtotal: Rp ${cartManager.formatPriceSimple(subtotal)}\n\n`;
            total += subtotal;
        });

        message += "═══════════════════════════════════\n";
        message += `*💰 TOTAL: Rp ${cartManager.formatPriceSimple(total)}*\n`;
        message += "═══════════════════════════════════\n\n";
        message += "*👤 DATA PEMESAN:*\n";
        message += `Nama: ${name}\n`;
        message += `No. WhatsApp: ${phone}\n`;

        if (address) {
            message += `\n*📍 Alamat Pengiriman:*\n`;
            message += `${address}\n`;
        }

        if (deliveryDate) {
            message += `\n*📅 Jadwal Pengambilan/Pengiriman:*\n`;
            message += `${deliveryDate}\n`;
        }

        if (notes) {
            message += `\n*📝 Catatan:*\n`;
            message += `${notes}\n`;
        }

        message += "\nTerima kasih telah memesan! 🙏\n";
        message += "Kami akan segera mengkonfirmasi pesanan Anda.";

        return message;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initOrderPage();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initOrderPage();
}
