import clickOutside from "./click-outside.js"

export default function dropDownMenu() {
    const dropdownMenu = document.querySelectorAll('[data-dropdown]')
    
    // Adiciona eventos a cada dropdown
    dropdownMenu.forEach(dropdownItem => {
        ['touchstart', 'click'].forEach(userEvent => {
            dropdownItem.addEventListener(userEvent, toggleDropDown)
        })
    })
    
    function toggleDropDown(event) {
        event.preventDefault()
        
        // Adiciona a classe ativo para mostrar o dropdown menu
        this.classList.toggle('ativo')
        // Aciona a funcao para verificar o clique fora do menu
        clickOutside(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        })
    }
}