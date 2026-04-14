// ============================================
// AUTHENTICATION (LOGIN & SIGNUP)
// ============================================

class AuthManager {
    constructor() {
        this.usersKey = 'users';  // Menggunakan key yang sama dengan sebelumnya
        this.currentUserKey = 'userLogin';  // Menggunakan key yang sama
        this.loadUsers();
    }

    // Load users dari localStorage
    loadUsers() {
        const savedUsers = localStorage.getItem(this.usersKey);
        this.users = savedUsers ? JSON.parse(savedUsers) : [];
    }

    // Save users ke localStorage
    saveUsers() {
        localStorage.setItem(this.usersKey, JSON.stringify(this.users));
    }

    // Signup: Buat akun baru
    signup(nama, email, password) {
        // Validasi input
        if (!nama || !email || !password) {
            return { success: false, message: 'Semua field harus diisi!' };
        }

        // Validasi email format
        if (!this.isValidEmail(email)) {
            return { success: false, message: 'Format email tidak valid!' };
        }

        // Validasi password minimal
        if (password.length < 6) {
            return { success: false, message: 'Password minimal 6 karakter!' };
        }

        // Cek email sudah terdaftar
        if (this.users.find(user => user.email === email)) {
            return { success: false, message: 'Email sudah terdaftar!' };
        }

        // Buat user baru
        const newUser = {
            id: Date.now(),
            nama: nama,
            email: email,
            password: this.hashPassword(password), // Simple hash (bisa lebih aman di production)
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        this.saveUsers();

        return { success: true, message: 'Akun berhasil dibuat! Silakan login.' };
    }

    // Login: Verifikasi akun
    login(email, password) {
        // Validasi input
        if (!email || !password) {
            return { success: false, message: 'Email dan password harus diisi!' };
        }

        // Cari user berdasarkan email
        const user = this.users.find(u => u.email === email);

        if (!user) {
            return { success: false, message: 'Email tidak terdaftar!' };
        }

        // Verifikasi password
        if (user.password !== this.hashPassword(password)) {
            return { success: false, message: 'Password salah!' };
        }

        // Set current user
        this.setCurrentUser(user);

        return { success: true, message: 'Login berhasil!', user: user };
    }

    // Set current user
    setCurrentUser(user) {
        // Simpan hanya data yang diperlukan (tanpa password)
        const userData = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            loginAt: new Date().toISOString()
        };
        localStorage.setItem(this.currentUserKey, JSON.stringify(userData));
    }

    // Get current user
    getCurrentUser() {
        const userStr = localStorage.getItem(this.currentUserKey);
        return userStr ? JSON.parse(userStr) : null;
    }

    // Logout
    logout() {
        localStorage.removeItem(this.currentUserKey);
        this.showNotification('Logout berhasil!', 'success');
        // Redirect ke home setelah logout
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }

    // Check apakah user sudah login
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    // Validasi email format
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Simple password hash (untuk demo, di production gunakan bcrypt atau library lain)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return 'hash_' + Math.abs(hash).toString(36);
    }

    // Show notification
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `auth-notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            notification.style.color = 'white';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            notification.style.color = 'white';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Update status login di navbar
    updateAuthStatus() {
        console.log('updateAuthStatus called');
        const isLoggedIn = this.isLoggedIn();
        const currentUser = this.getCurrentUser();
        
        const authDiv = document.querySelector('.auth');
        const cartIcon = document.getElementById('cartIcon');
        
        if (!authDiv) {
            console.log('authDiv not found');
            return;
        }
        
        if (isLoggedIn && currentUser) {
            // Ganti dengan nama user dan logout - TANPA cart icon
            authDiv.innerHTML = `
                <span class="user-greeting">Halo, ${currentUser.nama}!</span>
                <button class="btn-logout" onclick="authManager.logout()">Logout</button>
            `;
            console.log('User terlogin:', currentUser.nama);
        } else {
            // Tampilkan login/signup buttons - TANPA cart icon
            authDiv.innerHTML = `
                <a href="/pages/login/index.html" class="btn-outline">Login</a>
                <a href="/pages/sign-up/index.html" class="btn-primary">Sign Up</a>
            `;
            console.log('User belum login');
        }

        // Update cart display setelah navbar update
        const updateCart = () => {
            if (window.cartManager && window.cartManager.updateCartDisplay) {
                console.log('Updating cart display');
                window.cartManager.updateCartDisplay();
            } else {
                console.log('cartManager not ready, retrying');
                // Tunggu lagi jika belum tersedia
                setTimeout(updateCart, 100);
            }
        };
        setTimeout(updateCart, 200);
    }
}

// Inisialisasi auth manager
const authManager = new AuthManager();

// Expose ke global window untuk akses dari halaman lain
window.authManager = authManager;


