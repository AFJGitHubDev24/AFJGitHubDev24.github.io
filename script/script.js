document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year Setter
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Dark / Light Theme Toggle with Memory
  const themeToggleBtn = document.getElementById('theme-toggle');
  const icon = themeToggleBtn.querySelector('i');

  const setScheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pref-theme', theme);
    icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  };

  // Check saved setting or system dark mode default
  const savedTheme = localStorage.getItem('pref-theme');
  if (savedTheme) {
    setScheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    setScheme('light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setScheme(currentTheme === 'light' ? 'dark' : 'light');
  });

  // 3. Scroll Active Link Highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);
});