(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const raw = localStorage.getItem("booking_data");
        if (!raw) return;

        let d = {};
        try { d = JSON.parse(raw) || {}; } catch { d = {}; }

        const setText = (id, val, placeholder = "—") => {
            const el = document.getElementById(id);
            if (el) el.textContent = val && String(val).trim() ? val : placeholder;
        };

        setText("r_name",     d.name);
        setText("r_phone",    d.phone);
        setText("r_room",     d.room);
        setText("r_guests",   d.guests);
        setText("r_children", d.children);
        setText("r_checkin",  d.checkin,  "dd/mm/yyyy");
        setText("r_checkout", d.checkout, "dd/mm/yyyy");
        setText("r_request",  d.request);

        const btn = document.getElementById("btnPdf");
        if (btn) btn.addEventListener("click", () => window.print());
    });
})();
