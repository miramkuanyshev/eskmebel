document.addEventListener('DOMContentLoaded', function() {

    //бургер меню 
    const burgerMenu = document.getElementById('burger-menu');
    const headerNavigation = document.querySelector('.header-navigation');
    const body = document.body;

    burgerMenu.addEventListener('click', function() {
        headerNavigation.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    //движение за мышью

    const items = document.querySelectorAll('.advantages-item');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemX = rect.left + rect.width / 2;
            const itemY = rect.top + rect.height / 2;

            const deltaX = (mouseX - itemX) * 0.005;
            const deltaY = (mouseY - itemY) * 0.005;

            item.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
    });
});