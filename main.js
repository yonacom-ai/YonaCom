document.addEventListener('DOMContentLoaded', function(){
  var header   = document.querySelector('.site-header');
  if(!header) return;
  var btn      = header.querySelector('.nav-toggle');
  var nav      = header.querySelector('#site-menu');
  var backdrop = header.querySelector('.nav-backdrop');

  if(!btn || !nav || !backdrop){
    console.warn('[nav] 要素が見つからないよ', {btn:!!btn, nav:!!nav, backdrop:!!backdrop});
    return;
  }

  ['.site-header','.nav-toggle','#site-menu','.nav-backdrop'].forEach(s=>{
  console.log(s, !!document.querySelector(s));
});

  console.log('JSは生きてる？');

  document.querySelector('.site-header').classList.add('nav-open');


  function lock(){ document.documentElement.style.overflow = 'hidden'; }
  function unlock(){ document.documentElement.style.overflow = ''; }
  function open(){
    header.classList.add('nav-open');
    btn.setAttribute('aria-expanded','true');
    nav.setAttribute('aria-hidden','false');
    backdrop.removeAttribute('hidden');
    lock();
    var first = nav.querySelector('a'); if(first) first.focus();
  }
  function close(){
    header.classList.remove('nav-open');
    btn.setAttribute('aria-expanded','false');
    nav.setAttribute('aria-hidden','true');
    backdrop.setAttribute('hidden','');
    unlock();
    btn.focus();
  }
  function toggle(){ header.classList.contains('nav-open') ? close() : open(); }

  btn.addEventListener('click', toggle);
  backdrop.addEventListener('click', close);
  window.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  nav.addEventListener('click', function(e){ if(e.target.closest('a')) close(); });

  // 幅を広げたら保険で閉じる
  window.addEventListener('resize', function(){
    if(window.innerWidth > 900 && header.classList.contains('nav-open')) close();
  });
});

