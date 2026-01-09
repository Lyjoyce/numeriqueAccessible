// dark-mode-toggle.js
  const toggleButton = document.getElementById('dark-mode-toggle');

  // Vérifier le mode sombre dans le localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Sauvegarde dans localStorage
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

