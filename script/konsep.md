# 📦 Dokumentasi Konsep Website
# Marketplace UMKM – LUNARA BAKES

## 1. Deskripsi Aplikasi

**LUNARA BAKES** adalah website marketplace sederhana untuk UMKM yang menjual aneka **kue kering khas Hari Raya Idul Fitri**, seperti nastar, kastengel, putri salju, dan cookies lainnya.

Website ini dibuat dengan konsep **modern, elegan, dan mobile-friendly**, sehingga pelanggan dapat dengan mudah melihat katalog produk dan melakukan pemesanan secara online.

Target pengguna:
- Konsumen yang ingin membeli kue kering lebaran
- Pemilik UMKM yang ingin mempromosikan produknya secara digital

---

# 2. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Struktur halaman website |
| CSS | Styling dan desain tampilan |
| JavaScript | Interaksi halaman |
| Bootstrap | Framework UI agar responsive |
| MongoDB | Database penyimpanan data produk |
| VSCode | Code editor pengembangan |

---

# 3. Konsep Desain UI/UX

## Tema Visual
Konsep desain: **Elegant Sweet Bakery**

### Warna Utama

| Elemen | Warna |
|---|---|
| Primary | Pink Soft (#F7A8B8) |
| Secondary | Peach (#F9C5B6) |
| Background | Cream (#FFF6F0) |
| Text | Cocoa Brown (#6B4F4F) |

### Font

Heading:
- Playfair Display

Body Text:
- Poppins / Open Sans

---

# 4. Struktur Halaman Website

## 1. Landing Page

Landing page menjadi halaman utama yang pertama dilihat pengunjung.

### Komponen:

1. Navbar
- Logo LUNARA BAKES
- Menu:
  - Home
  - Produk
  - Tentang Kami
  - Kontak
  - Login Admin

2. Hero Section
- Foto kue kering premium
- Headline:

  "Kue Kering Premium untuk Momen Lebaran"

- Tombol:
  - Lihat Produk
  - Pesan Sekarang

3. Highlight Produk
Menampilkan 3–4 produk unggulan.

Contoh:
- Nastar Premium
- Kastengel Keju
- Putri Salju
- Choco Chips Cookies

4. Keunggulan UMKM

Icon + teks:

- Homemade Recipe
- Bahan Premium
- Freshly Baked
- Packaging Elegan

5. Testimoni Pelanggan

Contoh:

⭐⭐⭐⭐⭐  
"Kuenya lembut dan enak sekali!"

⭐⭐⭐⭐⭐  
"Cocok untuk hampers lebaran."

6. Footer

Berisi:

- Alamat usaha
- Instagram
- WhatsApp
- Email
- Copyright

---

# 5. Halaman Dashboard

Halaman ini menampilkan ringkasan aktivitas website.

Isi dashboard:

- Jumlah produk
- Jumlah pesanan
- Produk terlaris
- Notifikasi pesanan baru

Komponen:

- Sidebar Menu
- Statistik
- Grafik penjualan sederhana

---

# 6. Halaman Profil Usaha

Berisi informasi tentang UMKM **LUNARA BAKES**.

Isi halaman:

- Sejarah usaha
- Visi & Misi
- Foto dapur produksi
- Foto owner
- Sertifikasi / kualitas bahan

Contoh teks:

"LUNARA BAKES adalah usaha kue kering rumahan yang berfokus pada kualitas bahan dan cita rasa premium untuk menemani momen spesial keluarga saat Hari Raya."

---

# 7. Halaman Katalog Produk

Halaman ini menampilkan semua produk kue.

Tampilan menggunakan **Bootstrap Card Grid**.

Contoh produk:

| Produk | Harga |
|---|---|
| Nastar Premium | Rp 85.000 |
| Kastengel Keju | Rp 90.000 |
| Putri Salju | Rp 80.000 |
| Choco Chips Cookies | Rp 75.000 |

Struktur kartu produk:

- Foto produk
- Nama produk
- Deskripsi singkat
- Harga
- Tombol "Pesan"

---

# 8. Halaman Pemesanan

Halaman ini digunakan untuk melakukan order.

Form pemesanan berisi:

- Nama pembeli
- Nomor WhatsApp
- Alamat pengiriman
- Produk yang dipilih
- Jumlah pesanan
- Catatan tambahan

Tombol:

**Pesan Sekarang**

Setelah submit:
- Data disimpan ke MongoDB
- Notifikasi order muncul di admin

---

# 9. Halaman Kontak

Halaman untuk menghubungi pemilik usaha.

Isi:

Alamat:
Jl. Contoh UMKM No.10

WhatsApp:
08xxxxxxxxxx

Instagram:
@lunarabakes

Google Maps (embed)

---

# 10. Halaman Admin (Private)

Halaman ini hanya bisa diakses oleh admin.

Fungsi utama:

- Login Admin
- Manajemen produk
- Manajemen harga
- Melihat pesanan

---

## Fitur Admin

### 1. Login Admin

Form login:

- Username
- Password

Jika benar → masuk ke dashboard admin.

---

### 2. Manajemen Produk

Admin dapat:

- Tambah produk
- Edit produk
- Hapus produk
- Upload foto produk

Field produk:

- Nama produk
- Harga
- Deskripsi
- Foto

---

### 3. Manajemen Harga

Admin dapat:

- Mengubah harga produk
- Mengatur promo

---

### 4. Manajemen Pesanan

Admin dapat melihat:

- Nama pembeli
- Produk yang dibeli
- Jumlah
- Alamat
- Status pesanan

Status:

- Menunggu
- Diproses
- Dikirim
- Selesai

---

# 11. Struktur Folder Project

lunara-bakes
│
├── index.html
├── dashboard.html
├── produk.html
├── profil.html
├── pemesanan.html
├── kontak.html
│
├── admin
│ ├── login.html
│ ├── dashboard-admin.html
│ ├── produk-admin.html
│ └── pesanan-admin.html
│
├── css
│ └── style.css
│
├── js
│ └── script.js
│
├── images
│ └── produk
│
└── backend
└── server.js
---

# 12. Alur Sistem

User Flow:

Pengunjung membuka website  
↓  
Melihat katalog produk  
↓  
Memilih produk  
↓  
Mengisi form pemesanan  
↓  
Data tersimpan di MongoDB  
↓  
Admin menerima notifikasi pesanan

---

# 13. Konsep Responsive Design

Website dibuat **Mobile First** menggunakan Bootstrap:

Breakpoint utama:

- Mobile
- Tablet
- Desktop

Layout menggunakan:

- Bootstrap Grid
- Card
- Navbar Collapse

---

# 14. Pengembangan Selanjutnya

Fitur yang bisa ditambahkan:

- Sistem pembayaran online
- Integrasi WhatsApp otomatis
- Sistem login pelanggan
- Keranjang belanja
- Tracking pesanan
- Rating produk

---

# 15. Kesimpulan

Website **LUNARA BAKES** bertujuan membantu UMKM dalam:

- Memasarkan produk secara digital
- Mempermudah pelanggan melakukan pemesanan
- Mengelola produk dan pesanan melalui dashboard admin

Dengan desain **modern, elegan, dan mobile-friendly**, website ini dapat meningkatkan daya tarik produk kue kering UMKM terutama menjelang **Hari Raya Idul Fitri**.
