document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');

 
  mobileMenu.addEventListener('click', function (e) {
    const dropdownLink = e.target.closest('.dropdown');
    if (dropdownLink) {
      e.preventDefault();

      const dropdown = dropdownLink.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.toggle('open');
      }

      
      const allDropdowns = mobileMenu.querySelectorAll('.dropdown');
      allDropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
    }
  });

  
  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target)) {
      const openDropdowns = mobileMenu.querySelectorAll('.dropdown.open');
      openDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    }
  });
});

function openMobileMenu() {
  document.getElementById("mobileMenu").classList.add("active");
  document.body.classList.add("menu-open");
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.classList.remove("menu-open");
}
document.addEventListener("DOMContentLoaded", function () {
    const tabContainer = document.querySelector('.tab-container');
    const buttons = document.querySelectorAll('.mini-heading .btn');
    const contents = document.querySelectorAll('.total-content > div');

    function switchTab(targetId) {
       
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === targetId);
        });
        contents.forEach(content => {
            content.classList.toggle('active', content.id === targetId);
        });
    }
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            switchTab(this.dataset.target);
        });
    });
    tabContainer?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const currentIndex = Array.from(buttons).findIndex(btn => btn.classList.contains('active'));
            let nextIndex;

            if (e.key === 'ArrowLeft') {
                nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            } else {
                nextIndex = (currentIndex + 1) % buttons.length;
            }

            buttons[nextIndex].click();
            buttons[nextIndex].focus();
        }
    });
    switchTab('coastal');
});

function myFunction(event) {
        event.preventDefault();
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu.classList.add("active");
}
function closeMenu() {
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".dropdown-link");
     const mobileMenu = document.getElementById("mobileMenu");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            
            if (window.innerWidth <= 768) e.preventDefault();

            const isExpanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !isExpanded);

            const dropdownContent = this.nextElementSibling.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
                dropdownContent.style.display = !isExpanded ? "block" : "none";
            }
            dropdownLinks.forEach(other => {
                if (other !== this) {
                    other.setAttribute("aria-expanded", "false");
                    const otherContent = other.nextElementSibling.nextElementSibling;
                    if (otherContent && otherContent.classList.contains("dropdown-content")) {
                        otherContent.style.display = "none";
                    }
                }
            });
        });
    });
});

document.querySelectorAll('.open-modal').forEach(arrow => {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('profileModal');
      document.getElementById('modalName').innerText = this.dataset.name;
      document.getElementById('modalRole').innerText = this.dataset.role;
      document.getElementById('modalDescription').innerText = this.dataset.description;
      document.getElementById('modalImg').src = this.dataset.img;
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    });
  });

  document.querySelector('.modal .close').addEventListener('click', function() {
    document.getElementById('profileModal').style.display = 'none';
    document.body.classList.remove('modal-open');
  });

window.addEventListener('click', function(e) {
    const modal = document.getElementById('profileModal');
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
})

document.querySelectorAll('.glossary-heading').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const answer = button.nextElementSibling;
    answer.classList.toggle('show');
  });
});
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.range).classList.add('active');
  });
});
