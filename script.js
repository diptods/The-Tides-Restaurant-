// initialize AOS animations
AOS.init();

// loading 
window.addEventListener('load', function () {
    // hide loader
    var loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.style.display = 'none';
    }


    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNav.style.backgroundColor = "#4A1017";
                mainNav.classList.add('shadow');
            } else {
                mainNav.style.backgroundColor = "transparent";
                mainNav.classList.remove('shadow');
            }
        });
    }

    // making isotope filtering 
    var grid = document.querySelector('.menu-container');
    if (grid) {
        imagesLoaded(grid, function () {
            var iso = new Isotope(grid, {
                itemSelector: '.menu-item',
                layoutMode: 'fitRows'
            });


            var filterBtns = document.querySelectorAll('.btn-filter');
            filterBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {

                    filterBtns.forEach(b => b.classList.remove('active'));

                    this.classList.add('active');

                    var filterValue = this.getAttribute('data-filter');
                    iso.arrange({ filter: filterValue });
                });
            });
        });
    }
});



