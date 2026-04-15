# Testing Guide - Lunara Bakes Project

## Cara Testing Aplikasi

### 1. Setup & Prerequisites
```
- Buka project di VS Code
- Gunakan Live Server atau Python HTTP server
- Buka di browser: http://localhost:5500 (Live Server) atau http://localhost:8000
```

### 2. Testing Login & Sign Up

#### Test Sign Up
1. Klik **Sign Up** di navbar
2. Isi form:
   - Nama: "Test User"
   - Email: "test@example.com"
   - Password: "password123"
   - Konfirmasi: "password123"
3. Klik **Daftar**
4. **Expected:** 
   - Notifikasi "Akun berhasil dibuat"
   - Redirect ke Login page setelah 1.5 detik

#### Test Login
1. Klik **Login** di navbar
2. Isi form dengan data sign up di atas:
   - Email: "test@example.com"
   - Password: "password123"
3. Klik **Login**
4. **Expected:**
   - Notifikasi "Login berhasil"
   - Navbar berubah: Login/SignUp → "Halo, Test User!" + Logout button
   - Redirect ke Home setelah 1.5 detik

**Troubleshooting Login/SignUp:**
- Buka Browser Console (F12) → Console tab
- Cari error messages
- Pastikan `authManager` terload dengan sempurna
- Cek localStorage: Console → `localStorage.getItem('users')`

---

### 3. Testing Add to Cart

#### Test Menambah ke Keranjang
1. Klik **Menu** di navbar
2. Lihat beberapa produk dengan tombol "🛒 Tambahkan ke Keranjang"
3. Klik tombol pada salah satu produk (misal Moon Mini)
4. **Expected:**
   - Notifikasi muncul: "Paket Moon Mini ditambahkan ke keranjang!"
   - Badge di cart icon navbar berubah (menunjukkan jumlah item)

#### Debug Add to Cart
- Console: Cek apakah `cartManager` siap
- Console: `window.cartManager.getCart()` - lihat isi cart
- Console: `window.cartManager.getItemCount()` - lihat jumlah item

---

### 4. Testing Cart Page

#### Test Keranjang
1. **Klik cart icon** di navbar (atau go to `/pages/cart`)
2. **Expected:** Lihat tabel dengan item yang ditambahkan
   - Nama produk
   - Harga satuan
   - Quantity (dengan tombol +/-)
   - Subtotal
   - Tombol hapus

#### Test Update Quantity
1. Di cart page, lihat tombol **+** dan **-**
2. Klik **+** untuk nambah qty
3. Klik **-** untuk kurangi qty
4. **Expected:**
   - Quantity berubah
   - Subtotal & total terupdate
   - Cart count di navbar terupdate

#### Test Hapus Item
1. Di cart page, klik tombol **🗑️ Hapus**
2. Confirm delete
3. **Expected:**
   - Item terhapus dari list
   - Total price terupdate
   - Cart count terupdate

#### Debug Cart Issues
- Console: `window.cartManager.getCart()`
- Console: `localStorage.getItem('keranjang')`
- Pastikan `cart.js` sudah loaded
- Cek network tab untuk script loading errors

---

### 5. Testing Order & Checkout

#### Test Order Page
1. Di cart page dengan minimal 1 item, klik **Lanjut ke Order**
2. **Expected:** Redirect ke `/pages/order`
3. Lihat section "Anda memiliki X item..."
4. Lihat form dengan field:
   - Nama Lengkap
   - Nomor WhatsApp
   - Alamat Pengiriman
   - Catatan Pesanan
   - Tanggal Pengambilan

#### Test Checkout ke WhatsApp
1. Isi semua required field:
   - Nama: "John Doe"
   - WhatsApp: "628123456789"
2. Isi optional field (optional)
3. Klik **✓ Checkout ke WhatsApp**
4. **Expected:**
   - Tab baru membuka dengan WhatsApp
   - Pesan terformat dengan:
     - List produk & qty
     - Harga masing-masing
     - Total
     - Data pemesan
   - Ready untuk dikirim ke Lunara Bakes

#### Debug Checkout Issues
- Console: Cek apakah `buildOrderMessage()` berfungsi
- Console: `window.cartManager.buildOrderMessage()`
- Cek format pesan di WhatsApp yang terbuka

---

### 6. Testing Navigation

#### Test Navbar Links
1. **Di setiap page**, cek navbar:
   - Home link → `/` (home page)
   - Profile link → `/pages/profile`
   - Menu link → `/pages/menu`
   - Order link → `/pages/order` (jika ada item di cart)
   - Cart icon → `/pages/cart`

2. **Before Login:**
   - Lihat "Login" dan "Sign Up" button
   - Lihat cart icon

3. **After Login:**
   - Lihat nama user
   - Lihat Logout button
   - Lihat cart icon

---

### 7. Browser Console Commands for Testing

```javascript
// Check cart contents
window.cartManager.getCart()
window.cartManager.getItemCount()
window.cartManager.getTotal()
window.cartManager.formatPrice(100000)

// Check auth status
window.authManager.isLoggedIn()
window.authManager.getCurrentUser()
window.authManager.getAllUsers() // internal method

// Check localStorage
localStorage.getItem('keranjang')  // cart items
localStorage.getItem('users')      // registered users
localStorage.getItem('userLogin')  // current user

// Manual operations
window.cartManager.addProduct('Test Product', 50000)
window.cartManager.removeProduct(itemId)
window.cartManager.clearCart()

// Logout
window.authManager.logout()
```

---

### 8. Error Handling & Common Issues

#### Issue: "AuthManager tidak ditemukan"
- **Solution:** Pastikan `/script/auth.js` loaded terlebih dahulu
- Check network tab di DevTools

#### Issue: "Cart tidak update count"
- **Solution:** Hard refresh (Ctrl+F5)
- Check localStorage di Console

#### Issue: "Form tidak submit"
- **Solution:** Buka Console, cek event listener
- Pastikan `DOMContentLoaded` sudah triggered

#### Issue: "Redirect tidak jalan"
- **Solution:** Cek network tab
- Lihat apakah ada JavaScript error di console

#### Issue: "WhatsApp link tidak buka"
- **Solution:** Cek apakah URL encode benar
- Console: `console.log(whatsappUrl)` untuk lihat URL

---

### 9. Clean Browser Cache

Jika ada issue aneh:
1. Clear localStorage: `localStorage.clear()`
2. Hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
3. Close & reopen tab

---

### 10. Final Verification Checklist

- [x] All files exist
- [x] All paths are correct
- [x] HTML structure complete
- [x] Scripts loaded in order
- [ ] Form submission works
- [ ] Cart operations work
- [ ] LocalStorage persists
- [ ] Navigation works
- [ ] Responsive design OK
- [ ] No console errors

---

**Last Updated:** April 15, 2026  
**Status:** Ready for QA Testing
