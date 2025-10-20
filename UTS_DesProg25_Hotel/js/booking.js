(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("bookingForm");
        if (!form) return;

        const getVal = (id) => {
            const el = document.getElementById(id) || form.elements[id];
            return el ? String(el.value).trim() : "";
        };

        const toDDMMYYYY = (iso) => {
            if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso || "";
            const [y, m, d] = iso.split("-");
            return `${d}/${m}/${y}`;
        };

        form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = {
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

        localStorage.setItem("booking_data", JSON.stringify(data));
        window.location.href = "receipt.html";
        });
    });
})();
