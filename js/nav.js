const menuBTN = document.querySelector('.menu-btn');
let menuOpen = false;

// Main Menu Toggle Open
menuBTN.addEventListener('click', () => {
    if(!menuOpen) {
        menuBTN.classList.add('open');
        document.getElementById('nav-bar').classList.add('open');
        menuOpen = true;
    } else {
        menuBTN.classList.remove('open');
        document.getElementById('nav-bar').classList.remove('open');
        menuOpen = false;
    }
});
