document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  try {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  } catch (err) {
    console.error('Nav toggle failed to initialise:', err);
  }

  /* ---------- Scroll-reveal animation ---------- */
  try {
    document.documentElement.classList.add('reveal-ready');
    const revealEls = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('is-visible'));
    }
  } catch (err) {
    console.error('Reveal animation failed to initialise:', err);
  }

});
