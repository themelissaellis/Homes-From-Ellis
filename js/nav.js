// NAV menu 
const navBTN = document.querySelector('.navBtn');
let menuOpen = false;

const navItem = document.querySelectorAll('.nav-item');
// let menuOpen = false;

// *** Click to toggle hamburger menu ***

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


// *** Click to toggle list items in menu ***

// navItem.forEach(nav-item => {
//     nav-item.addEventListener('click', () => {
//     if(navBTN.classList.contains('open')
//         navBtn
//     )    
//     }
//     )
// })