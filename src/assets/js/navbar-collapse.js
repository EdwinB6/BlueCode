document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navbar = document.getElementById('navbarCollapse');

    menuButton.addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });
  });