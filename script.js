    // Theme toggle with localStorage persistence
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const darkThemeClass = 'dark-theme';

    function setTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add(darkThemeClass);
        themeToggleBtn.textContent = 'Light Mode';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        document.documentElement.classList.remove(darkThemeClass);
        themeToggleBtn.textContent = 'Dark Mode';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Load saved theme or prefer system
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme(true);
    } else {
      setTheme(false);
    }

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains(darkThemeClass);
      setTheme(!isDark);
    });

    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    const msgStatus = document.getElementById('msgStatus');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      msgStatus.textContent = '';
      msgStatus.style.color = '';

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name) {
        msgStatus.textContent = 'Please enter your name.';
        msgStatus.style.color = '#dc2626';
        contactForm.name.focus();
        return;
      }
      if (!email) {
        msgStatus.textContent = 'Please enter your email.';
        msgStatus.style.color = '#dc2626';
        contactForm.email.focus();
        return;
      }
      if (!validateEmail(email)) {
        msgStatus.textContent = 'Please enter a valid email address.';
        msgStatus.style.color = '#dc2626';
        contactForm.email.focus();
        return;
      }
      if (!message) {
        msgStatus.textContent = 'Please enter a message.';
        msgStatus.style.color = '#dc2626';
        contactForm.message.focus();
        return;
      }

      // Simulate successful submission
      msgStatus.textContent = 'Thank you, your message has been sent!';
      msgStatus.style.color = '#16a34a';
      contactForm.reset();
    });
