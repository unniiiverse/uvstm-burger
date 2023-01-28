class UvstmBurger {
  init() {
    const triggers = document.querySelectorAll('.uvstm-burger_trigger');

    triggers.forEach(el => {
      el.setAttribute('aria-controls', 'uvstm-burger-menu');
      el.setAttribute('aria-label', 'Open burger menu');
      el.setAttribute('aria-expanded', false);

      el.addEventListener('click', (e) => {
        const html = document.documentElement;

        if (html.classList.contains('uvstm-burger-menu--open')) {
          triggers.forEach(el => {
            el.setAttribute('aria-expanded', false);
            el.setAttribute('aria-label', 'Open burger menu');
          })
          html.classList.remove('uvstm-burger-menu--open');
        } else {
          triggers.forEach(el => {
            el.setAttribute('aria-expanded', true);
            el.setAttribute('aria-label', 'Close burger menu');
          })
          html.classList.add('uvstm-burger-menu--open');
        }
      })
    })
  }
}