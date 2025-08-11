document.addEventListener('DOMContentLoaded', () => {
  const header   = document.querySelector('.site-header');
  const btn      = document.querySelector('.nav-toggle');
  const nav      = document.querySelector('#site-menu');
  const backdrop = document.querySelector('.nav-backdrop');

  if(!header || !btn || !nav || !backdrop){
    console.warn('[nav] 要素が見つからない:', {header,btn,nav,backdrop});
    return;
  }

  const lock   = () => { document.documentElement.style.overflow = 'hidden'; };
  const unlock = () => { document.documentElement.style.overflow = ''; };

  const open = () => {
    header.classList.add('nav-open');
    btn.setAttribute('aria-expanded','true');
    nav.setAttribute('aria-hidden','false');
    backdrop.hidden = false;
    lock();
  };
  const close = () => {
    header.classList.remove('nav-open');
    btn.setAttribute('aria-expanded','false');
    nav.setAttribute('aria-hidden','true');
    backdrop.hidden = true;
    unlock();
  };
  const toggle = () => (header.classList.contains('nav-open') ? close() : open());

  btn.addEventListener('click', toggle);
  backdrop.addEventListener('click', close);
  window.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });

  // メニュー内リンクで閉じる
  nav.addEventListener('click', e => { if(e.target.closest('a')) close(); });
});
