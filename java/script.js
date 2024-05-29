
/*dropdown menu på click*/
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

/*burger menu submeny på click*/
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


/*click burgerbar*/
document.addEventListener('DOMContentLoaded', function() {
    const burgerImage = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-bar');

    burgerImage.addEventListener('click', function() {
        burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
    });
});

/* gi submenyen egen plass*/
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownToggles = document.querySelectorAll('.dropdown-toggle-burger');

        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                
                var submenu = this.nextElementSibling;
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    /*fjerne andre åpne*/
                    document.querySelectorAll('.burger-submenu').forEach(function(menu) {
                        menu.classList.remove('show');
                    });
                    submenu.classList.add('show');
                }
            });
        });
    });






