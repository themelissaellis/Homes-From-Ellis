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


// Close menu from anywhere on page 

function closeNav(e) {
    let isClickInside = menuBTN.contains(e.target);

    if (!isClickInside && menuBTN.querySelector('#nav-bar.open')) {
        menuBTN.querySelector('#nav-bar.open').classList.remove('nav-bar.open')
    }

}

document.addEventListener('click', closeNav, false);