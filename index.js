document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelectorAll('.dropdown-link').forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.setAttribute('aria-expanded', 'false');
        }
      });
  
     
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!isExpanded));
    });
});
  
 
document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
            const link = dropdown.querySelector('.dropdown-link');
            link.setAttribute('aria-expanded', 'false');
        }
    });
});





function toggleMobileMenu(event) {
    event.preventDefault();
    const menu= document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}
function closeMenu() {
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.classList.remove("active");
}
  
  
  
