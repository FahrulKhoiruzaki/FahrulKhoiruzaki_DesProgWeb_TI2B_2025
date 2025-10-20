document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
        const id = a.getAttribute('href');
        if (id.length > 1) {
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) {
                const navH = parseInt(getComputedStyle(document.documentElement)
                .getPropertyValue('--navbar-h')) || 99;
                const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
                window.scrollTo({top, behavior:'smooth'});
            }
        }
    });
});

const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const targets = ['#home', '#rooms', '#facilities', '#gallery', '#about']
.map(sel => document.querySelector(sel))
.filter(Boolean);

function setActive(id){
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
}

function onScroll(){
    if (!targets.length) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 90;
    const y = window.scrollY + navH + 2;
    let current = '#home';
    for (const el of targets){
        if (y >= el.offsetTop) current = '#' + el.id;
    }
    setActive(current);
}
window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll, {
    passive: true
});

//Animasi Parallax
(function(){
    const layer = document.querySelector('.hero-bg');
    if (!layer) return;
    let ticking = false;
    const speed = 0.35;
    function update(){
        const y = window.pageYOffset * speed;
        layer.style.transform = `translateY(${y}px)`;
        ticking = false;
    }
    window.addEventListener('scroll', ()=>{
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    });
    update();
})();

//Book now
document.querySelectorAll('.book-btn').forEach(btn =>{
    btn.addEventListener('click', () =>{
        window.location.href = 'booking.html';
    });
});

//Facilities
(function(){
    const track = document.querySelector('.facilities-track');
    const dotsWrap = document.querySelector('.facilities-dots');
    if (!track || !dotsWrap) return;
    
    const dots = Array.from(dotsWrap.querySelectorAll('.dot'));
    const viewport = track.parentElement;
    let idx = 0, timer = null;

    function go(i, animate = true){
        const w = viewport.clientWidth;
        if (!animate) track.style.transition = 'none';
        track.style.transform = `translateX(-${i * w}px)`;
        if (!animate){
            track.offsetHeight;
            track.style.transition = 'transform .5s ease';
        }
        dots.forEach((d, k) => d.classList.toggle('active', k === i));
    }
    function next(){
        idx = (idx + 1) % dots.length;
        go(idx);
    }
    function start(){
        stop();
        timer = setInterval(next, 2000);
    }
    function stop(){
        if (timer) clearInterval(timer);
    }
    dots.forEach((d, i) =>{
        d.addEventListener('click', ()=>{
            stop();
            idx = i;
            go(idx);
            start();
        });
    });
    window.addEventListener('resize', ()=> go(idx, false));
    go(idx, false);
    start();
})();