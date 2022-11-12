const nav_button = document.getElementById('nav-button');
const nav_container = document.getElementById('nav-item-list-container');

nav_button.addEventListener('click', () => {
    nav_container.classList.toggle('show-nav');
    nav_button.classList.toggle('showing')
    nav_button.children[0].innerHTML = nav_button.classList.contains('showing') ? 'close' : 'menu';
    console.log('clicked');
});