document.querySelectorAll('.dropdown > .dropdow-btn').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});

document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (!menu.previousElementSibling.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
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
  
  
  
