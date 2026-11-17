// Menú móvil, animaciones al hacer scroll y año del footer. Sin dependencias.
(function () {
  var b = document.querySelector('.menu-btn'), n = document.getElementById('mnav');
  if (b && n) {
    var set = function (o) { n.classList.toggle('open', o); b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú'); };
    b.addEventListener('click', function () { set(!n.classList.contains('open')); });
    n.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
  // Al terminar la animación de escritura, quitar el recorte para que la palabra quede fija
  [].forEach.call(document.querySelectorAll('.hero h1 .script'), function (el) {
    el.addEventListener('animationend', function () { el.classList.add('done'); });
  });
  var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

  // Aparición progresiva al hacer scroll (solo si el usuario no pidió reducir movimiento)
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sel = 'main .sec .eyebrow, main .sec h2, main .sec .lead, .val, .svc li, .endo figure, .endo h3, .endo p, .gallery li, .about figure, .letter > p, .chips, .stage, .steps li, .listen > *, .place figure, .place .card, .faq details, .facts dl > div, .final .btn';
  var els = [].slice.call(document.querySelectorAll(sel));
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { var t = e.target; t.classList.add('in'); io.unobserve(t); setTimeout(function () { t.style.transitionDelay = ''; }, 1600); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  els.forEach(function (el) {
    var sib = el.parentNode ? [].indexOf.call(el.parentNode.children, el) : 0;
    el.style.transitionDelay = Math.min(sib, 6) * 90 + 'ms';
    el.classList.add('rv');
    io.observe(el);
  });
})();
