const t=['Our child loves coming to school.','Warm, nurturing environment.','A wonderful place to grow.'];
let i=0;const q=document.getElementById('quote');
function show(){q.textContent='“'+t[i]+'”';i=(i+1)%t.length;}show();setInterval(show,3000);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});
