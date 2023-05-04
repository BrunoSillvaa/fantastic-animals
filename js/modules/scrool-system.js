export default function scrollSystem() {
    // Seleciona o Menu
    const menuList = document.querySelectorAll('[data-menu="item"]')


    function scrollToSection(event) {
        event.preventDefault()

        // Pega o value de 'href' ao item do menu
        const href = this.getAttribute('href')
        // Seleciona a section com o mesmo value do 'href' do item
        const section = document.querySelector(href)

        // Verifica se a seção existe e define o scroll suave dela
        if (section) {
            section.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }
    }

    //Adiciona um EventListener a cada item do Menu
    menuList.forEach((menuItem) => {
        menuItem.addEventListener('click', scrollToSection)
    })
}