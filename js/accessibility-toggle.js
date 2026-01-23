const accessibilityButton = document.getElementById('accessibility-toggle');

if (localStorage.getItem('accessibility') === 'enabled') {
  document.body.classList.add('accessibility');
  accessibilityButton.setAttribute('aria-pressed', 'true');
}

accessibilityButton.addEventListener('click', () => {
  const active = document.body.classList.toggle('accessibility');

  accessibilityButton.setAttribute('aria-pressed', active);

  localStorage.setItem(
    'accessibility',
    active ? 'enabled' : 'disabled'
  );
});