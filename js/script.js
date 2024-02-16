document.addEventListener('DOMContentLoaded', function () {
    /* To make the webpage start at the top */
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    /*if (navigator.onLine) {
        /*var typed = new Typed('.multiple-text', {
            strings: ['ML Engineer.', 'Software Engineer.', 'Front-end Developer.'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }*/

    /*=================== Toggle menu =======================*/
    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
    };

    /*============== Scroll section active ======================*/
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                });
            };
        });
        /*============== make navbar not to move ==================*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        /*========== remove toggle icon and navbar when click navbar =========*/
        menu.classList.remove('active');
        navbar.classList.remove('active');
    };

    /*toggling
    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
        navbar.getElementsByClassName.display = (navbar.getElementsByClassName.display == 'none') ? 'block' : 'none';
    })*/
});