const nav_button = document.getElementById('nav-button');
const nav_container = document.getElementById('nav-item-list-container');

nav_button.addEventListener('click', () => {
    nav_container.classList.toggle('show-nav');
    nav_button.classList.toggle('showing')
    nav_button.children[0].innerHTML = nav_button.classList.contains('showing') ? 'close' : 'menu';
    console.log('clicked');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.top = "0";
        // animate footer off screen
        document.getElementsByTagName("footer")[0].style.bottom = "0";

    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
        // animate footer on screen
        document.getElementsByTagName("footer")[0].style.bottom = "-100px";
    }
    prevScrollpos = currentScrollPos;
}