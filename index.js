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

document.addEventListener("DOMContentLoaded", function () {
    const tabContainer = document.querySelector('.tab-container'); // Optional wrapper
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
 