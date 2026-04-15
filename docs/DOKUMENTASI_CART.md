# 🌙 Sistem Keranjang Belanja Lunara Bakes

## ✅ Fitur yang Telah Diimplementasikan

### 1. **Tombol "Tambahkan ke Keranjang"** 
- Menggantikan tombol "Pesan" pada halaman menu
- Tersedia di semua produk:
  - Paket Hampers (Moon Mini, Golden Eid, Royal Lunara)
  - Produk Individual (Nastar, Chocolate Cookies, Kue Kacang, dll)
- Menampilkan notifikasi saat produk ditambahkan

### 2. **Sistem Keranjang Dinamis**
- **File:** `script/cart.js`
- Menyimpan data keranjang di `localStorage` (tidak hilang saat refresh)
- Fitur:
  - ✅ Tambah produk ke keranjang
  - ✅ Hapus produk dari keranjang  
  - ✅ Ubah jumlah (quantity) produk
  - ✅ Hitung total harga otomatis
  - ✅ Hitung total item di keranjang

### 3. **Badge Keranjang di Navbar**
- Menampilkan jumlah item dalam keranjang
- Muncul di semua halaman (Home, Menu, Order)
- Format: angka merah dengan animasi pulse
- Update otomatis saat produk ditambah/dihapus

### 4. **Halaman Order Baru**
- **File:** `pages/order/index.html` + `script/order.js`
- Layout 2 kolom:
  - **Kolom Kiri:** Tampilan keranjang dengan kontrol
  - **Kolom Kanan:** Form data pemesan

#### Fitur Keranjang:
- Tampilan tabel dengan:
  - Nama produk
  - Harga satuan
  - Kontrol jumlah (tombol +/-, input manual)
  - Subtotal per item
  - Tombol hapus item
- Ringkasan:
  - Total item
  - Subtotal (harga semua produk)
  - Total pembayaran
  - Tombol "Kosongkan Keranjang"

#### Form Data Pemesan:
- Nama Lengkap (wajib)
- Nomor WhatsApp (wajib)
- Alamat Pengiriman (opsional)
- Catatan Pesanan (opsional)
- Tanggal Pengambilan/Pengiriman (opsional)
- Tombol "Checkout ke WhatsApp"

### 5. **Checkout ke WhatsApp**
- **Nomor:** +62 831-4946-6923
- Format pesan terstruktur dengan:
  - 📦 Rincian setiap produk (nama, qty, harga)
  - 💰 Total pembayaran
  - 👤 Data pemesan
  - 📍 Alamat (jika ada)
  - 📅 Jadwal pengambilan (jika ada)
  - 📝 Catatan pesanan (jika ada)

---

## 📁 File-File yang Telah Dibuat/Diubah

### File Baru:
1. **`script/cart.js`** - Logika keranjang belanja
2. **`script/order.js`** - Logika halaman order dan checkout

### File yang Diupdate:
1. **`pages/menu/index.html`** - Ubah tombol Pesan menjadi "Tambahkan ke Keranjang"
2. **`script/menu.js`** - Add event listener untuk tombol keranjang
3. **`pages/order/index.html`** - Desain ulang halaman order
4. **`index.html`** - Tambah cart badge di navbar
5. **`style/component.css`** - Tambah CSS untuk cart dan checkout

---

## 🔄 Alur Kerja

### User Journey:
1. **Lihat Menu** → Halaman Menu menampilkan produk dengan tombol "Tambahkan ke Keranjang"
2. **Tambah Produk** → Click tombol → Notifikasi → Badge keranjang update
3. **Buka Keranjang** → Click "Order" di navbar dengan badge jumlah item
4. **Lihat Keranjang** → Tampil daftar produk dengan kontrol qty
5. **Isi Data** → Masukkan nama, nomor WA, alamat, dll
6. **Checkout** → Click tombol → Buka WhatsApp dengan pesan otomatis terformat

---

## 💾 Penyimpanan Data

- Keranjang disimpan di **localStorage** dengan key `"keranjang"`
- Format: Array of objects
```json
[
  {
    "id": 1234567890,
    "nama": "Paket Moon Mini",
    "harga": 100000,
    "qty": 2
  }
]
```

---

## 🎨 Responsive Design

- ✅ Desktop: Layout 2 kolom
- ✅ Tablet: Layout 2 kolom (disesuaikan)
- ✅ Mobile: Layout 1 kolom (cart di atas, form di bawah)

---

## 🔧 Customization

### Ubah Nomor WhatsApp:
- File: `script/cart.js` (line ~220)
- File: `script/order.js` (line ~180)
- Cari: `"6283149466923"` → ganti dengan nomor Anda

### Ubah Warna Badge:
- File: `style/component.css` (cari `#cart-badge`)
- Ubah nilai `background: linear-gradient(...)`

---

## ⚠️ Note Penting

1. **Validasi Form:** Nama & No. WhatsApp wajib diisi
2. **No. WhatsApp:** Otomatis konversi dari format lokal (08x) ke internasional (62x)
3. **Clear Cart:** Untuk mengosongkan keranjang, click tombol di halaman order
4. **Persistent:** Keranjang tetap ada meski browser ditutup (localStorage)

---

Last Updated: 2026-04-14
