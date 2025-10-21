// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => { // Ambil semua elemen <a> yang href-nya diawali tanda #
    a.addEventListener('click', e => { // Saat link diklik
        const id = a.getAttribute('href'); // Ambil nilai href
        if (id.length > 1) { // Pastikan bukan hanya tanda #
            e.preventDefault(); // Hentikan perilaku default (loncat mendadak)
            const target = document.querySelector(id); // Cari elemen tujuan berdasarkan id
            if (target) { // Jika elemen tujuan ditemukan
                const navH = parseInt(getComputedStyle(document.documentElement)
                    .getPropertyValue('--navbar-h')) || 99; // Ambil tinggi navbar dari CSS variable atau 99px default
                const top = target.getBoundingClientRect().top + window.pageYOffset - navH; // Hitung posisi scroll ke target
                window.scrollTo({ top, behavior: 'smooth' }); // Lakukan scroll halus (smooth)
            }
        }
    });
});

// NAVBAR
const navLinks = Array.from(document.querySelectorAll('.nav-link')); // Ambil semua link navbar
const targets = ['#home', '#rooms', '#facilities', '#gallery', '#about'] // Daftar id target section
    .map(sel => document.querySelector(sel)) // Ubah jadi elemen DOM
    .filter(Boolean); // Hapus nilai null jika ada section yang belum dimuat

function setActive(id) { // Fungsi untuk memberi class 'active' pada link sesuai posisi scroll
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id)); // Aktifkan link yang sesuai dengan id
}

function onScroll() { // Fungsi untuk mendeteksi scroll dan ubah menu aktif
    if (!targets.length) return; // Jika tidak ada target section, keluar
    const navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-h')) || 90; // Ambil tinggi navbar dari CSS
    const y = window.scrollY + navH + 2; // Hitung posisi scroll saat ini
    let current = '#home'; // Default aktif di Home
    for (const el of targets) { // Cek setiap section
        if (y >= el.offsetTop) current = '#' + el.id; // Jika scroll melewati section, tandai yang aktif
    }
    setActive(current); // Terapkan class aktif sesuai section
}

window.addEventListener('load', onScroll); // Jalankan fungsi ketika halaman selesai dimuat
window.addEventListener('scroll', onScroll, { passive: true }); // Jalankan setiap kali pengguna menggulir

// PARALLAX
(function () { // IIFE agar tidak mencemari global scope
    const layer = document.querySelector('.hero-bg'); // Ambil elemen background hero
    if (!layer) return; // Jika tidak ada, hentikan

    let ticking = false; // Flag agar tidak memanggil animasi terlalu sering
    const speed = 0.35; // Kecepatan efek parallax

    function update() { // Fungsi untuk menghitung posisi parallax
        const y = window.pageYOffset * speed; // Hitung posisi Y sesuai scroll
        layer.style.transform = `translateY(${y}px)`; // Geser background secara halus
        ticking = false; // Reset flag
    }

    window.addEventListener('scroll', () => { // Jalankan efek ketika halaman digulir
        if (!ticking) { // Jika belum dalam keadaan animasi
            requestAnimationFrame(update); // Jalankan update dengan efisiensi tinggi
            ticking = true; // Tandai sedang berjalan
        }
    });

    update(); // Jalankan efek saat pertama kali load
})();

// BOOK NOW BUTTON
document.querySelectorAll('.book-btn').forEach(btn => { // Ambil semua tombol dengan class .book-btn
    btn.addEventListener('click', () => { // Saat diklik
        window.location.href = 'booking.html'; // Arahkan pengguna ke halaman booking.html
    });
});

// FACILITIES SLIDER
(function () { // Bungkus dalam IIFE agar variabel tidak global
    const track = document.querySelector('.facilities-track'); // Ambil elemen kontainer track gambar fasilitas
    const dotsWrap = document.querySelector('.facilities-dots'); // Ambil elemen indikator titik
    if (!track || !dotsWrap) return; // Jika salah satu tidak ditemukan, hentikan

    const dots = Array.from(dotsWrap.querySelectorAll('.dot')); // Ambil semua tombol dot
    const viewport = track.parentElement; // Ambil elemen pembungkus track (viewport)
    let idx = 0, timer = null; // Index slide aktif dan variabel timer untuk autoplay

    function go(i, animate = true) { // Fungsi untuk berpindah ke slide ke-i
        const w = viewport.clientWidth; // Lebar area viewport
        if (!animate) track.style.transition = 'none'; // Jika tidak animasi, matikan transisi
        track.style.transform = `translateX(-${i * w}px)`; // Geser track sejauh lebar i * w
        if (!animate) { // Jika tanpa animasi, aktifkan ulang transisi
            track.offsetHeight; // Paksa reflow agar transisi diterapkan
            track.style.transition = 'transform .5s ease'; // Aktifkan transisi halus 0.5s
        }
        dots.forEach((d, k) => d.classList.toggle('active', k === i)); // Tandai dot aktif
    }

    function next() { // Fungsi untuk berpindah ke slide berikutnya
        idx = (idx + 1) % dots.length; // Naik 1 index, lalu kembali ke awal jika di akhir
        go(idx); // Panggil fungsi go untuk animasi ke slide baru
    }

    function start() { // Fungsi untuk memulai autoplay
        stop(); // Pastikan timer lama dihentikan dulu
        timer = setInterval(next, 2000); // Jalankan next() setiap 2 detik
    }

    function stop() { // Fungsi untuk menghentikan autoplay
        if (timer) clearInterval(timer); // Hapus interval timer
    }

    dots.forEach((d, i) => { // Untuk setiap dot (indikator)
        d.addEventListener('click', () => { // Saat dot diklik
            stop(); // Hentikan autoplay sementara
            idx = i; // Ganti index aktif sesuai dot yang diklik
            go(idx); // Geser ke slide yang dipilih
            start(); // Mulai ulang autoplay
        });
    });

    window.addEventListener('resize', () => go(idx, false)); // Jika jendela diubah ukurannya, sesuaikan posisi slide tanpa animasi
    go(idx, false); // Panggil fungsi go pertama kali tanpa animasi agar posisi awal benar
    start(); // Jalankan autoplay saat halaman dimuat
})();
