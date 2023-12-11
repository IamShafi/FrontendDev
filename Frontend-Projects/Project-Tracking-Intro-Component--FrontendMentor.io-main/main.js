const menuMobile = document.getElementById('menu_mobile')
const navBar = document.getElementById('navbar')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('close_menu')
    navBar.classList.toggle('show_menu')
})