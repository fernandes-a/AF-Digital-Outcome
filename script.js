function showMenu() {
    let nav = document.querySelector('.nav-links')
    navItem = document.querySelectorAll('.nav-item');

    nav.classList.toggle("open");
    
    navItem.forEach(link => {
        link.classList.toggle("fade");
    });
};