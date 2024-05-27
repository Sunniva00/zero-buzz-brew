
/*dropdown menu on click*/
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(dropdownToggle) {
        /*add click*/
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
        /*show*/
            submenu.classList.toggle('show');
        });
    });
});

/*burger menu*/
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle-burger');

    dropdownToggles.forEach(function(dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});


/*click burgerbar image*/
document.addEventListener('DOMContentLoaded', function() {
    const burgerImage = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-bar');

    burgerImage.addEventListener('click', function() {
        burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
    });
});

/* make the submenu not cover menupoints*/
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownToggles = document.querySelectorAll('.dropdown-toggle-burger');

        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                
                var submenu = this.nextElementSibling;
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    // Close other open submenus
                    document.querySelectorAll('.burger-submenu').forEach(function(menu) {
                        menu.classList.remove('show');
                    });
                    submenu.classList.add('show');
                }
            });
        });
    });






