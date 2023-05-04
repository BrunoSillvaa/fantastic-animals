export default function initModal() {
    const modalOpen = document.querySelector('[data-modal="start"]')
    const modalExit = document.querySelector('[data-modal="exit"]')
    const modalContainer = document.querySelector('[data-modal="container"]')

    if (modalOpen && modalExit && modalContainer) {

        function toggleModal(event) {
            event.preventDefault()
            modalContainer.classList.toggle('ativo')
        }

        function clickOutModal(event) {
            if (event.target == this) {
                toggleModal(event)
            }
        }

        modalOpen.addEventListener('click', toggleModal)
        modalExit.addEventListener('click', toggleModal)
        modalContainer.addEventListener('click', clickOutModal)
    }
}