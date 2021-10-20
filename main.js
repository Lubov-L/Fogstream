"use strict"

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.nav__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}