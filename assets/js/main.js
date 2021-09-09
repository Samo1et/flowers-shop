
const buttonMenu = document.getElementById('menu-button');
const popupMunu = document.getElementById('popup-menu');
const buttonCloseMenu = document.getElementById('close-menu-button');

buttonMenu.onclick = () => popupMunu.style = 'display: block';
buttonCloseMenu.onclick = () => popupMunu.style = 'display: none';