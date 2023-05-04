import clickOutside from "./click-outside.js"

export default function menuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const events = ['click', 'touchstart']

    events.forEach(userEvent => menuButton.addEventListener(userEvent, openMenu))

    function openMenu() {
        if (!this.classList.contains('active')) {
            this.classList.add('active')
            menuList.classList.add('active')
            clickOutside(menuList, events, () => {
                menuButton.classList.remove('active')
                menuList.classList.remove('active')
            })
        }
    }
}