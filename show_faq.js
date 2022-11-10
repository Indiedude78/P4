const dropdown_arrows = document.querySelectorAll('.dropdown-arrow');
dropdown_arrows.forEach((arrow) => {
    // toggle hidden class on paragraph
    arrow.addEventListener('click', () => {
        if (!arrow.classList.contains('rotate')) {
            arrow.parentElement.parentElement.querySelector('.hidden').classList.toggle('hidden');
            console.log("")
        } else {
            arrow.parentElement.parentElement.querySelector('.text-lg').classList.toggle('hidden');
        }
        // toggle rotate class on arrow
        arrow.classList.toggle('rotate');
    });
});