// ============================================
// SISTEM KERANJANG BELANJA LUNARA BAKES
// ============================================

class CartManager {
    constructor() {
        this.cartKey = 'keranjang';
        this.loadCart();
    }

    // Load keranjang dari localStorage
    loadCart() {
        const savedCart = localStorage.getItem(this.cartKey);
        this.cart = savedCart ? JSON.parse(savedCart) : [];
    }

    // Simpan keranjang ke localStorage
    saveCart() {
        localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
        this.updateCartDisplay();
    }

    // Tambah produk ke keranjang
    addProduct(nama, harga) {
        const existingItem = this.cart.find(item => item.nama === nama);
        
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            this.cart.push({
                id: Date.now(),
                nama: nama,
                harga: parseInt(harga),
                qty: 1
            });
        }
        
        this.saveCart();
        this.showNotification(`${nama} ditambahkan ke keranjang!`);
    }

    // Hapus produk dari keranjang
    removeProduct(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveCart();
    }

    // Update jumlah produk
    updateQuantity(id, qty) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            if (qty <= 0) {
                this.removeProduct(id);
            } else {
                item.qty = qty;
                this.saveCart();
            }
        }
    }

    // Hapus semua produk dari keranjang
    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    // Hitung total harga
    getTotal() {
        return this.cart.reduce((total, item) => total + (item.harga * item.qty), 0);
    }

    // Hitung jumlah item
    getItemCount() {
        return this.cart.reduce((count, item) => count + item.qty, 0);
    }

    // Ambil semua item cart
    getCart() {
        return this.cart;
    }

    // Format harga untuk tampilan
    formatPrice(price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Update tampilan badge keranjang
    updateCartDisplay() {
        // Tunggu sebentar untuk memastikan elemen navbar sudah terupdate
        setTimeout(() => {
            const cartBadge = document.getElementById('cart-badge');
            const cartCount = document.querySelector(".cart-count");
            const itemCount = this.getItemCount();
            
            if (cartBadge) {
                if (itemCount > 0) {
                    cartBadge.textContent = itemCount;
                    cartBadge.style.display = 'flex';
                } else {
                    cartBadge.style.display = 'none';
                }
            }

            if (cartCount) {
                if (itemCount > 0) {
                    cartCount.textContent = itemCount;
                    cartCount.style.display = 'block';
                } else {
                    cartCount.textContent = '0';
                    cartCount.style.display = 'none';
                }
            }
        }, 100);
    }

    // Tampilkan notifikasi
    showNotification(message) {
        // Buat elemen notifikasi
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        
        // Styling
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Hapus notifikasi setelah 3 detik
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Build pesan order untuk WhatsApp
    buildOrderMessage(customerName = '', customerPhone = '', notes = '') {
        if (this.cart.length === 0) {
            return null;
        }

        let message = "🌙 *PESANAN LUNARA BAKES* 🌙\n\n";
        message += "══════════════════════════\n";
        message += "*RINCIAN PRODUK:*\n";
        message += "══════════════════════════\n";

        let total = 0;
        this.cart.forEach((item, index) => {
            const subtotal = item.harga * item.qty;
            message += `${index + 1}. ${item.nama}\n`;
            message += `   Qty: ${item.qty} pcs × Rp ${this.formatPriceSimple(item.harga)}\n`;
            message += `   Subtotal: Rp ${this.formatPriceSimple(subtotal)}\n\n`;
            total += subtotal;
        });

        message += "══════════════════════════\n";
        message += `*TOTAL: Rp ${this.formatPriceSimple(total)}*\n`;
        message += "══════════════════════════\n\n";

        if (customerName) {
            message += `👤 Nama: ${customerName}\n`;
        }

        if (customerPhone) {
            message += `📱 No. WhatsApp: ${customerPhone}\n`;
        }

        if (notes) {
            message += `📝 Catatan: ${notes}\n`;
        }

        message += "\nTerima kasih telah memesan! 🙏";

        return message;
    }

    // Format harga tanpa styling (untuk pesan)
    formatPriceSimple(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

// Inisialisasi cart manager
const cartManager = new CartManager();

// Expose ke global window untuk akses dari halaman lain
window.cartManager = cartManager;

// Panggil fungsi initialization saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    cartManager.updateCartDisplay();
    
    // Update cart count di navbar
    const cartCountNavbar = document.getElementById('cart-count-navbar');
    if (cartCountNavbar) {
        const itemCount = cartManager.getItemCount();
        if (itemCount > 0) {
            cartCountNavbar.textContent = itemCount;
            cartCountNavbar.style.display = 'block';
        } else {
            cartCountNavbar.style.display = 'none';
        }
    }
});

// Update cart count ketika ada perubahan
window.addEventListener('storage', function(e) {
    if (e.key === 'keranjang') {
        cartManager.loadCart();
        cartManager.updateCartDisplay();
        
        const cartCountNavbar = document.getElementById('cart-count-navbar');
        if (cartCountNavbar) {
            const itemCount = cartManager.getItemCount();
            if (itemCount > 0) {
                cartCountNavbar.textContent = itemCount;
                cartCountNavbar.style.display = 'block';
            } else {
                cartCountNavbar.style.display = 'none';
            }
        }
    }
});

// Log untuk debug
console.log('Cart.js loaded - cartManager ready');
