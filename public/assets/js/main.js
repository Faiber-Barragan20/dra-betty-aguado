// Menú móvil + año del footer. Sin dependencias.
(function () {
  var b = document.querySelector('.menu-btn'), n = document.getElementById('mnav');
  if (b && n) {
    var set = function (o) { n.classList.toggle('open', o); b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú'); };
    b.addEventListener('click', function () { set(!n.classList.contains('open')); });
    n.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
  var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
})();
