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