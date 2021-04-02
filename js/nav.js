const menuBTN = document.querySelector('.menu-btn');
const navBar = document.getElementById('nav-bar');
let menuOpen = false;

// Main Menu Toggle Open
menuBTN.addEventListener('click', (evt) => {
    console.log("From Menu")
    if(!menuOpen) {
        menuBTN.classList.add('open');
        navBar.classList.add('open');
        menuOpen = true;
    } else {
        menuBTN.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen = false;
    }
    evt.stopPropagation();
});

// click
document.getElementsByTagName('body')[0].addEventListener('click', () => {
    console.log("From Body")
    menuBTN.classList.remove('open');
    navBar.classList.remove('open');
})


// Close menu from anywhere on page 

// function closeNav(e) {
//     let isClickInside = menuBTN.contains(e.target);

//     if (!isClickInside && menuBTN.querySelector('#nav-bar.open')) {
//         menuBTN.querySelector('#nav-bar.open').classList.remove('nav-bar.open')
//     }

// }

// document.addEventListener('click', closeNav, false);