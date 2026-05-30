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

/* ─── NAVEGAÇÃO POR SEÇÕES ─── */
const secoes = ['sobre', 'projetos', 'certificados', 'experiencia', 'contato'];

function mostrarSecao(id) {
  secoes.forEach(s => {
    const el  = document.getElementById(s);
    const nav = document.getElementById('nav-' + s);

    if (s === id) {
      el.style.display = 'block';
      if (nav) nav.classList.add('active');
      animarSecao(el);
    } else {
      el.style.display = 'none';
      if (nav) nav.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

/* ─── REINICIA ANIMAÇÕES AO TROCAR DE SEÇÃO ─── */
function animarSecao(el) {
  const items = el.querySelectorAll('.anim');
  items.forEach(item => {
    item.style.animation = 'none';
    item.style.opacity   = '0';
    void item.offsetWidth; /* reflow forçado */
    item.style.animation = '';
  });
}

/* ─── INICIALIZA NA SEÇÃO "SOBRE" ─── */
mostrarSecao('sobre');