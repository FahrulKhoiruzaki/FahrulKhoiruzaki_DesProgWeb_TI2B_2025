(function () {
    document.addEventListener("DOMContentLoaded", () => { // Menjalankan setelah seluruh dokumen HTML selesai dimuat
        const form = document.getElementById("bookingForm"); // Mengambil elemen form dengan id="bookingForm"
        if (!form) return; //Jika tidak ada form menghentikan script

        const getVal = (id) => {  // Fungsi untuk mengambil nilai dari elemen input berdasarkan id
            const el = document.getElementById(id) || form.elements[id]; // Mencari elemen lewat getElementById atau form.elements
            return el ? String(el.value).trim() : ""; // Mengembalikan nilai dalam bentuk string tanpa spasi di awal/akhir
        };

        const toDDMMYYYY = (iso) => { // Fungsi untuk mengubah format tanggal dari YYYY-MM-DD menjadi DD/MM/YYYY
            if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso || ""; // Jika format tidak sesuai, kembalikan nilai aslinya
            const [y, m, d] = iso.split("-"); // Memisahkan string berdasarkan tanda "-" menjadi array [tahun, bulan, tanggal]
            return `${d}/${m}/${y}`; // Mengembalikan format baru dd/mm/yyy
        };

        form.addEventListener("submit", (e) => { // Menangkap event ketika form disubmit
        e.preventDefault();  // Mencegah form dikirim secara default (halaman tidak reload)

        const data = { // Membuat objek data yang berisi semua nilai dari form
            name:     getVal("name"),
            email:    getVal("email"),
            phone:    getVal("phone"),
            room:     getVal("roomType"),
            guests:   getVal("guests"),
            children: getVal("children"),
            checkin:  toDDMMYYYY(getVal("checkin")),
            checkout: toDDMMYYYY(getVal("checkout")),
            request:  getVal("request")
        };

        localStorage.setItem("booking_data", JSON.stringify(data)); // Menyimpan data ke localStorage dalam format JSON
        window.location.href = "receipt.html"; // Mengalihkan halaman ke receipt.html setelah submit
        });
    });
})();
