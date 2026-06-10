/* ─── CURSOR PERSONALIZADO ─── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  }, 60);
});

/* ─── ANIMAÇÕES DE ENTRADA ─── */
function animarSecao(el) {
  const items = el.querySelectorAll('.anim');
  items.forEach(item => {
    item.style.animation = 'none';
    item.style.opacity   = '0';
    void item.offsetWidth;
    item.style.animation = '';
  });
}

/* ─── INICIALIZA ANIMAÇÕES NA SEÇÃO VISÍVEL ─── */
document.addEventListener('DOMContentLoaded', () => {
  const secao = document.querySelector('section');
  if (secao) animarSecao(secao);
});

/* ─── TEMA CLARO / ESCURO ─── */
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : '');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (icon)  icon.className  = isLight ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  if (label) label.textContent = isLight ? 'escuro' : 'claro';
}

function toggleTheme() {
  const current = localStorage.getItem('ld-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ld-theme', next);
  applyTheme(next);
}

// Restaura ao carregar
(function () {
  const saved = localStorage.getItem('ld-theme') || 'dark';
  applyTheme(saved);
})();