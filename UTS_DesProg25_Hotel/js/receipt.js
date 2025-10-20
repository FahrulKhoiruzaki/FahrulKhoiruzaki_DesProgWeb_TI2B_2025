(function () {
    function ready(fn) {
        if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fn);
        } else fn();
    }

    ready(() => {
        const raw = localStorage.getItem('booking_data');
        if (!raw) {
            console.warn('[receipt] booking_data not found in localStorage');
            return;
        }

        let d;
        try {
            d = JSON.parse(raw);
        } catch (e) {
            console.error('[receipt] JSON parse error', e);
            return;
        }

        const F = (v, f = '—') => (v && String(v).trim() !== '' ? v : f);
        const set = (id, val, fb) => {
            const el = document.getElementById(id);
            if (el) el.textContent = F(val, fb);
        };

        set('r_name', d.name);
        set('r_email', d.email);
        set('r_phone', d.phone);
        set('r_room', d.room);
        set('r_guests', d.guests);
        set('r_children', d.children);
        set('r_checkin', d.checkin, 'dd/mm/yyyy');
        set('r_checkout', d.checkout, 'dd/mm/yyyy');
        set('r_request', d.request);

        console.log('[receipt] bound data:', d);

        const btn = document.getElementById('btnPdf');
        if (btn) btn.addEventListener('click', () => window.print());
    });
})();
