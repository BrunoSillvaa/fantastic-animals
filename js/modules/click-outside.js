export default function clickOutside(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    // Verifica se o atributo outside existe no elemento
    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
        })

        element.setAttribute(outside, '')
    }

    function handleOutsideClick(event) {
        // Verifica se o clique foi fora do dropdown menu
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick)
            })
            callback()
        }
    }
}