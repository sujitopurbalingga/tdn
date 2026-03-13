# Teknologi Digital Nasional Meet

Aplikasi rapat video generasi baru yang aman, gratis, dan tanpa batas, dibangun untuk para profesional di seluruh Indonesia.

Aplikasi ini menggunakan teknologi Next.js App Router, Tailwind CSS untuk styling UI modern, Framer Motion untuk animasi, dan `@jitsi/react-sdk` untuk sistem webRTC konferensi video yang keamanannya terjamin.

## Memulai secara Lokal

Untuk menjalankan aplikasi ini secara lokal di komputer Anda:

1. Pastikan Node.js sudah terinstal.
2. Jalankan perintah instalasi dependensi (jika belum):
   ```bash
   npm install
   ```
3. Mulai server pengembangan:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Panduan Hosting ke GitHub & Verel

Aplikasi ini siap untuk dipublikasikan secara online agar bisa diakses oleh siapa saja.

### Langkah 1: Push ke GitHub

1. Buka akun GitHub Anda dan buat repository baru (kosong, tanpa README/gitignore).
2. Di terminal Anda, jalankan perintah berikut secara berurutan:
   ```bash
   git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git
   git branch -M main
   git push -u origin main
   ```
*(Ganti URL di atas dengan URL repository Anda yang sebenarnya).*

### Langkah 2: Deploy ke Vercel

Vercel adalah platform hosting terbaik untuk framework Next.js.
1. Kunjungi [Vercel](https://vercel.com/) dan login dengan akun GitHub Anda.
2. Klik tombol **Add New...** > **Project**.
3. Pilih repository GitHub "Teknologi Digital Nasional Meet" yang baru saja Anda push.
4. Klik **Deploy**.
5. Tunggu proses build selesai (sekitar 1-2 menit), dan Vercel akan memberikan Anda sebuah link URL publik (misal: `https://nama-web.vercel.app`) yang bisa Anda bagikan ke semua orang!
