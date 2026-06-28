# 🎯 ZaxQuiz

> Aplikasi Quiz Interaktif Modern dengan 8 Kategori dan 400+ Soal

![ZaxQuiz Banner](https://img.shields.io/badge/ZaxQuiz-v1.0.0-6C63FF?style=for-the-badge&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📋 Daftar Isi

- [Tentang ZaxQuiz](#-tentang-zaxquiz)
- [Fitur Utama](#-fitur-utama)
- [Demo](#-demo)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi](#-instalasi)
- [Cara Penggunaan](#-cara-penggunaan)
- [Kategori Soal](#-kategori-soal)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)
- [Tim Pengembang](#-tim-pengembang)

---

## 🎯 Tentang ZaxQuiz

**ZaxQuiz** adalah aplikasi web quiz interaktif yang dirancang untuk menguji dan memperluas pengetahuan Anda dalam berbagai bidang. Dengan desain modern yang lucu dan imut, ZaxQuiz menghadirkan pengalaman belajar yang menyenangkan dan tidak membosankan.

### 🚀 Mengapa ZaxQuiz?

- **Tanpa Framework** - Dibangun murni dengan HTML, CSS, dan JavaScript
- **Responsif** - Berfungsi sempurna di HP, tablet, dan desktop
- **Modern** - Dark/Light mode dengan animasi halus
- **Edukatif** - Setiap soal dilengkapi penjelasan
- **Interaktif** - Efek suara, animasi, dan feedback instan

---

## ✨ Fitur Utama

### 🎮 Gameplay
- ✅ 50 soal per sesi yang diacak
- ✅ 4 pilihan jawaban dengan acak posisi
- ✅ Feedback instan (benar/salah)
- ✅ Penjelasan singkat untuk jawaban salah
- ✅ Progress bar real-time
- ✅ Timer opsional (15 detik per soal)

### 🏆 Skor & Statistik
- ✅ Skor real-time
- ✅ Statistik akhir (benar/salah/persentase)
- ✅ Riwayat skor (tersimpan di LocalStorage)
- ✅ Statistik kumulatif di halaman utama

### 🎨 Desain & UI
- ✅ Dark Mode & Light Mode
- ✅ Animasi halus (SlimeySquishy, fade, slide)
- ✅ Efek hover dan klik
- ✅ Confetti untuk skor tinggi
- ✅ Ripple effect pada tombol
- ✅ Emoji dan ikon yang ceria

### 🔊 Audio
- ✅ Efek suara (correct, wrong, click, complete)
- ✅ Timer warning sound
- ✅ Tombol toggle suara

### ⌨️ Kemudahan
- ✅ Keyboard shortcuts
- ✅ Auto-save progress
- ✅ Responsif di semua perangkat
- ✅ Haptic feedback (perangkat sentuh)

---

## 🖥️ Demo

### Tampilan Home Screen
![Home Screen](https://via.placeholder.com/600x400/6C63FF/FFFFFF?text=ZaxQuiz+Home+Screen)

### Tampilan Quiz
![Quiz Screen](https://via.placeholder.com/600x400/FF6B9D/FFFFFF?text=ZaxQuiz+Quiz+Screen)

### Tampilan Hasil
![Result Screen](https://via.placeholder.com/600x400/6BCB77/FFFFFF?text=ZaxQuiz+Result+Screen)

> *Catatan: Ganti placeholder dengan screenshot aktual*

---

## 📁 Struktur Proyek

```
zaxquiz/
├── index.html                 # Halaman utama
├── README.md                  # Dokumentasi
├── css/
│   └── style.css             # Stylesheet utama (800+ baris)
├── js/
│   ├── script.js             # Logika aplikasi (700+ baris)
│   └── questions.js          # Database soal (3000+ baris)
└── assets/
    ├── sounds/               # Efek suara (opsional)
    │   ├── correct.mp3
    │   ├── wrong.mp3
    │   ├── click.mp3
    │   └── complete.mp3
    └── icons/                # Ikon tambahan
```

---

## 📦 Instalasi

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk Google Fonts)

### Langkah Instalasi

1. **Clone Repository**
```bash
git clone https://github.com/username/zaxquiz.git
cd zaxquiz
```

2. **Buka di Browser**
```bash
# Cukup double-click index.html
# Atau gunakan live server
```

3. **Tanpa Server (Local)**
```bash
# Buka langsung di browser
open index.html
# atau
start index.html  # Windows
```

4. **Dengan Live Server (VS Code)**
```bash
# Install extension "Live Server"
# Klik kanan index.html → Open with Live Server
```

### ⚡ Quick Start

```html
<!-- Cukup copy-paste semua file ke folder yang sama -->
<!-- Buka index.html di browser -->
<!-- Selesai! 🎉 -->
```

---

## 🎮 Cara Penggunaan

### 1. Halaman Utama
- Pilih **Kategori** yang diinginkan
- Pilih **Tingkat Kesulitan** (Semua/Sedang/Sulit)
- Aktifkan/nonaktifkan **Timer**
- Klik **"Mulai Quiz!"** untuk memulai

### 2. Selama Quiz
- Baca pertanyaan dengan seksama
- Klik salah satu dari 4 pilihan jawaban
- Jika **benar** → langsung ke soal berikutnya
- Jika **salah** → lihat jawaban benar + penjelasan
- Gunakan **Hint** (💡) jika perlu
- Perhatikan **Timer** jika aktif

### 3. Hasil Quiz
- Lihat skor akhir dan persentase
- Statistik per kategori
- Klik **"Ulangi Quiz"** untuk mencoba lagi
- Klik **"Kembali ke Home"** untuk memilih kategori lain

### 4. Riwayat Skor
- Klik **"Lihat Riwayat Skor"** di halaman utama
- Lihat semua riwayat quiz yang pernah dilakukan
- Hapus riwayat jika diperlukan

---

## 📚 Kategori Soal

| No | Kategori | Jumlah Soal | Tingkat Kesulitan |
|----|----------|-------------|-------------------|
| 1 | Pengetahuan Umum | 50 | Sedang - Sulit |
| 2 | Matematika | 50 | Sedang - Sulit |
| 3 | Agama Islam | 50 | Sedang - Sulit |
| 4 | Nama Bendera Dunia | 50 | Sedang |
| 5 | Negara dan Ibu Kota | 50 | Sedang - Sulit |
| 6 | Provinsi Indonesia | 50 | Sedang - Sulit |
| 7 | Sejarah Indonesia | 50 | Sedang - Sulit |
| 8 | Sejarah Dunia | 50 | Sedang - Sulit |
| **Total** | **8 Kategori** | **400 Soal** | - |

### Detail Soal
Setiap soal memiliki:
- ❓ Pertanyaan
- 🔘 4 pilihan jawaban (A, B, C, D)
- ✅ Jawaban benar
- 📖 Penjelasan singkat
- 💡 Hint (petunjuk)
- 📊 Tingkat kesulitan (Sedang/Sulit)

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan variabel CSS
- **JavaScript (ES6+)** - Logika aplikasi

### Library & API
- **Google Fonts** - Font Quicksand
- **Web Audio API** - Efek suara
- **LocalStorage API** - Penyimpanan riwayat

### Fitur Khusus
- CSS Custom Properties (Theming)
- CSS Animations & Transitions
- DOM Manipulation
- Event Listeners
- Web Audio API

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `1` - `4` | Pilih jawaban |
| `H` | Tampilkan hint |
| `ESC` | Keluar quiz |
| `Ctrl` + `H` | Kembali ke Home |
| `Ctrl` + `R` | Restart quiz |
| `?` | Tampilkan help |

---

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi! Berikut cara Anda dapat membantu:

### 🐛 Melaporkan Bug
1. Buka [Issues](https://github.com/username/zaxquiz/issues)
2. Klik "New Issue"
3. Pilih template "Bug Report"
4. Jelaskan bug dengan detail

### 💡 Saran Fitur
1. Buka [Issues](https://github.com/username/zaxquiz/issues)
2. Klik "New Issue"
3. Pilih template "Feature Request"
4. Jelaskan fitur yang diinginkan

### 📝 Menambahkan Soal
1. Fork repository
2. Buka `js/questions.js`
3. Tambahkan soal sesuai format
4. Buat Pull Request

### 🎨 Desain
1. Fork repository
2. Modifikasi `css/style.css`
3. Uji coba
4. Buat Pull Request

### Panduan Kontribusi
```javascript
// Format soal yang benar
{
    question: 'Pertanyaan di sini?',
    options: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'],
    correctIndex: 0, // Index jawaban benar (0-3)
    explanation: 'Penjelasan singkat...',
    difficulty: 'sedang', // atau 'sulit'
    hint: 'Petunjuk...'
}
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

```
MIT License

Copyright (c) 2024 ZaxQuiz Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Tim Pengembang

| Nama | Peran | Kontribusi |
|------|------|------------|
| **Tim ZaxQuiz** | Pengembang Utama | Full-stack development |

---

## 🙏 Ucapan Terima Kasih

Terima kasih kepada:
- **Semua kontributor** yang telah membantu mengembangkan ZaxQuiz
- **Komunitas open source** atas inspirasi dan library yang digunakan
- **Para pengguna** yang telah menggunakan dan memberikan feedback

---

## 📞 Kontak & Dukungan

- 📧 Email: zaxquiz@example.com
- 🐦 Twitter: [@ZaxQuiz](https://twitter.com/zaxquiz)
- 📱 Instagram: [@ZaxQuiz](https://instagram.com/zaxquiz)
- 💬 Discord: [ZaxQuiz Community](https://discord.gg/zaxquiz)

---

## 🌟 Bintang di GitHub

Jika Anda menyukai proyek ini, berikan ⭐ di GitHub!

[![GitHub stars](https://img.shields.io/github/stars/username/zaxquiz?style=social)](https://github.com/username/zaxquiz)

---

## 📊 Statistik Proyek

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/username/zaxquiz)
![GitHub repo size](https://img.shields.io/github/repo-size/username/zaxquiz)
![GitHub last commit](https://img.shields.io/github/last-commit/username/zaxquiz)
![GitHub issues](https://img.shields.io/github/issues/username/zaxquiz)
![GitHub pull requests](https://img.shields.io/github/issues-pr/username/zaxquiz)

---

**Made with ❤️ by ZaxQuiz Team**

---

*Terakhir diperbarui: Desember 2024*
