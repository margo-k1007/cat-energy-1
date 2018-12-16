var buttonOpen = document.querySelector('.burger-menu__link--open');
var buttonClose = document.querySelector('.burger-menu__link--close');
var mainMenu = document.querySelector('.main-menu');

if (buttonOpen !== null) {
    buttonOpen.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add('hide');
        mainMenu.classList.add('show-b');
        buttonClose.classList.add('show-b');
    });

    buttonClose.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.remove('show-b');
        mainMenu.classList.remove('show-b');
        buttonOpen.classList.remove('hide');
    });
};