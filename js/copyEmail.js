function copyEmail() {
  const input = document.getElementById("email");
  const feedback = document.getElementById("copy-feedback");

  input.select();
  input.setSelectionRange(0, 9999);
  document.execCommand("copy");

  // Afficher le feedback
  feedback.hidden = false;

  // Masquer après 2 secondes
  setTimeout(() => {
    feedback.hidden = true;
  }, 2000);
}