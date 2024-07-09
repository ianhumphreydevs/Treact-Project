// function openMenu() {
//   document.body.classList += " menu--open";
// }

// function closeMenu() {
//   document.body.classList.remove("menu--open");
// }


function openMenu() {
    document.querySelector('.nav__container').classList.add('menu--open');
}

function closeMenu() {
    document.querySelector('.nav__container').classList.replace('menu--open' , 'menu--close');
}

function toggleModal() {
    const modal = document.querySelector('.menu__backdrop');
    const isOpen = backdrop.classList.contains('menu--open');

    if (isOpen) {
        backdrop.classList.remove('menu--open');
        backdrop.classList.add('menu--close');
        backdrop.addEventListener('animationend', () => {
            backdrop.classList.remove('menu--close');
        }, { once: true });
    } else {
        backdrop.style.display = 'flex';
        backdrop.classList.remove('menu--close');
        backdrop.classList.add('menu--open');
    }
}