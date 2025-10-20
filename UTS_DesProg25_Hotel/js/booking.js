(function () {
    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else fn();
    }

    function toDDMMYYYY(iso) {
        if (!iso) return '';
        const [y, m, d] = iso.split('-');
        return `${d}/${m}/${y}`;
    }

    function pick(form, key) {
        return form?.elements?.[key] || document.getElementById(key) || null;
    }

    function val(el) {
        return (el?.value ?? '').toString().trim();
    }

    function getSpecialRequest(form) {
        const keys = [
            'specialRequest', 'special_request', 'special-request',
            'request', 'requests',
            'notes', 'note', 'message', 'messages',
            'pesan', 'catatan', 'keterangan'
    ];

        for (const k of keys) {
            const el = pick(form, k) || form.querySelector(`[name="${k}"]`);
            if (el) return val(el);
        }

        const containsSelector = [
            'textarea[name*="request" i]', 'textarea[name*="note" i]', 'textarea[name*="message" i]',
            'input[name*="request" i]', 'input[name*="note" i]', 'input[name*="message" i]',
            'textarea[id*="request" i]', 'textarea[id*="note" i]', 'textarea[id*="message" i]',
            'input[id*="request" i]', 'input[id*="note" i]', 'input[id*="message" i]'
        ].join(',');

        const el2 = form.querySelector(containsSelector);
        if (el2) return val(el2);

        const ta = form.querySelector('textarea');
        if (ta) return val(ta);

        const inp = form.querySelector('input[type="text"]');
        if (inp) return val(inp);

        return '';
    }

    ready(() => {
        const form = document.querySelector('#bookingForm');
        if (!form) {
            console.error('[booking] #bookingForm NOT FOUND');
            return;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const roomEl = pick(form, 'roomType');
            const roomLabel = roomEl?.selectedOptions?.[0]?.text ?? val(roomEl);

            const checkinEl = pick(form, 'checkin');
            const checkoutEl = pick(form, 'checkout');

            const data = {
                name: val(pick(form, 'name')),
                email: val(pick(form, 'email')),
                phone: val(pick(form, 'phone')),
                room: roomLabel,
                guests: val(pick(form, 'guests')),
                children: val(pick(form, 'children')),
                checkin: (checkinEl?.type === 'date')
                    ? toDDMMYYYY(checkinEl.value)
                    : val(checkinEl),
                checkout: (checkoutEl?.type === 'date')
                    ? toDDMMYYYY(checkoutEl.value)
                    : val(checkoutEl),
                request: getSpecialRequest(form),
            };

            console.log('[booking] saved data:', data);

            localStorage.setItem('booking_data', JSON.stringify(data));
            window.location.href = 'receipt.html';
        });
    });
})();