function showMenu() {
    let nav = document.querySelector('.nav-links')
    navItem = document.querySelectorAll('.nav-item');

    nav.classList.toggle("open");
    
    navItem.forEach(link => {
        link.classList.toggle("fade");
    });
};

function openSearch() {
    let searchBar = document.querySelector('#search-bar')
    textArea = document.querySelector('#search-text')
    cancelButton = document.querySelector('#search-cancel')
    nav = document.querySelector("nav");

    searchBar.classList.add("active");
    textArea.classList.add("active");
    cancelButton.classList.add("active");

    nav.style.display = "none";
};

function closeSearch() {
    let searchBar = document.querySelector('#search-bar')
    textArea = document.querySelector('#search-text')
    cancelButton = document.querySelector('#search-cancel');
    nav = document.querySelector("nav");

    searchBar.classList.remove("active");
    textArea.classList.remove("active");
    cancelButton.classList.remove("active");

    nav.style.display = "block";

    textArea.value = "";

};

function showSettings() {
    let settings = document.querySelector('.settings-options')
    options = document.querySelectorAll('.option')
    nav = document.querySelector(".hamburger");

    settings.classList.toggle("open");

    nav.classList.toggle("hidden");
    
    options.forEach(link => {
        link.classList.toggle("fade");
    });
};

