// Add active class on click
const menuLinks = document.querySelectorAll('.menu-list a');

menuLinks.forEach(link => {
link.addEventListener('click', (e) => {menuLinks.forEach(item => item-classList.remove('active')};
    e.target.classList.add('active');
    e.preventDefault();
  });
});