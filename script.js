function showMenu() {
    let navArea = document.querySelector('.nav-links')
    navItem = document.querySelectorAll('.nav-item')
    nav = document.querySelector('nav');

    navArea.classList.toggle("open");

    nav.classList.toggle("open");

    navItem.forEach(link => {
        link.classList.toggle("fade");
    });
};

function playpauseSnippet() {
    let play = document.querySelector("#play-icon")
    pause = document.querySelector("#pause-icon")
    audio = document.querySelector("#audio");

    if (audio.paused) {
        audio.play();
        play.classList.add("hide");
        pause.classList.remove("hide");

    } else {
        audio.pause();
        play.classList.remove("hide");
        pause.classList.add("hide");
    };

    audio.onended = function() {
        play.classList.remove("hide");
        pause.classList.add("hide");    
    };
};

function likeSnippet() {
    let outline = document.querySelector("#empty-heart")
    fill = document.querySelector("#red-heart");

    outline.classList.toggle("hide");
    fill.classList.toggle("hide");
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
    let settingsArea = document.querySelector('.settings-options')
    options = document.querySelectorAll('.option')
    settings = document.querySelector("#settings");

    settingsArea.classList.toggle("open");

    settings.classList.toggle("open");
    
    options.forEach(link => {
        link.classList.toggle("fade");
    });
};

