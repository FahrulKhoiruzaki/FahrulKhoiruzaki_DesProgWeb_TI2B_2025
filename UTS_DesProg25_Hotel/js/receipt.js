(function () {
    document.addEventListener("DOMContentLoaded", () => { // Menjalankan setelah seluruh dokumen HTML selesai dimuat
        const raw = localStorage.getItem("booking_data"); // Mengambil data yang disimpan di localStorage dengan key "booking_data"
        if (!raw) return; // Jika tidak ada data booking, hentikan script

        let d = {}; // Inisialisasi variabel kosong untuk data booking
        try {
            d = JSON.parse(raw) || {}; // Mencoba mengubah string JSON menjadi objek JavaScript
        } catch {
            d = {}; // Jika parsing gagal, tetap pakai objek kosong untuk mencegah error
        }
        const setText = (id, val, placeholder = "—") => { // Fungsi untuk menampilkan teks pada elemen berdasarkan id
            const el = document.getElementById(id); // Mengambil elemen HTML berdasarkan id
            if (el) el.textContent = val && String(val).trim() ? val : placeholder; // Jika ada nilai, tampilkan; jika tidak, tampilkan placeholder
        };

        setText("r_name",     d.name);
        setText("r_phone",    d.phone);
        setText("r_room",     d.room);
        setText("r_guests",   d.guests);
        setText("r_children", d.children);
        setText("r_checkin",  d.checkin,  "dd/mm/yyyy");
        setText("r_checkout", d.checkout, "dd/mm/yyyy");
        setText("r_request",  d.request);

        const btn = document.getElementById("btnPdf"); // Mengambil tombol cetak (id="btnPdf")
        if (btn) btn.addEventListener("click", () => window.print()); // Menjalankan fungsi print browser saat tombol diklik
    });
})();
