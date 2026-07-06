// Add active class on click
const menuLinks = document.querySelectorAll('.menu-list a');

if (menuLinks.length) {
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      menuLinks.forEach(item => item.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
}
