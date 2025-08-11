// main.js: ヘッダーやリンクの軽い動きをつけるスクリプト

// スクロール時にヘッダーに影を付ける
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 2) {
    header.style.boxShadow = '0 6px 20px rgba(0,0,0,.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// 外部リンクは新しいタブで開くようにする
document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener');
});
