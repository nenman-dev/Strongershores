const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

function myFunction(event) {
    event.preventDefault();
    const menu= document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}
function closeMenu() {
const mobileMenu = document.getElementById("mobileMenu");
mobileMenu.classList.remove("active");
}
  
  
  
