function copyEmail() {
  const input = document.getElementById("email");
  const feedback = document.getElementById("copy-feedback");

  input.select();
  input.setSelectionRange(0, 9999);
  document.execCommand("copy");

  // Afficher avec fade
  feedback.hidden = false;
  feedback.classList.add("visible");

  // Masquer après 2 secondes
  setTimeout(() => {
    feedback.classList.remove("visible");

    // attendre la fin du fade pour cacher
    setTimeout(() => {
      feedback.hidden = true;
    }, 400);
  }, 2000);
}