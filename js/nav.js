const navBTN = document.querySelector('.navBtn');
let menuOpen = false;
navBTN.addEventListener('click', () => {
    if(!menuOpen) {
        navBTN.classList.add('open');
        document.getElementById('nav-bar').classList.add('open');
        menuOpen = true;
    } else {
        navBTN.classList.remove('open');
        document.getElementById('nav-bar').classList.remove('open');
        menuOpen = false;
    }
});