export default function initToolTip() {

    const tooltips = document.querySelectorAll('[data-tooltip]')
    
    tooltips.forEach((tooltip) => {
        tooltip.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = createTooltipBox(this)

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)
        
        onMouseLeave.element = this
        onMouseLeave.tooltipBox = tooltipBox
        this.addEventListener('mouseleave', onMouseLeave)
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = `${event.pageY + 20}px`
            this.tooltipBox.style.left = `${event.pageX + 32}px`
        }
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mousemove', onMouseMove)
            this.element.removeEventListener('mouseleave', onMouseLeave)
        }
    }

    function createTooltipBox(element) {
        const tooltiBox = document.createElement('div')
        const text = element.getAttribute('aria-label')

        tooltiBox.classList.add('tooltip')
        tooltiBox.innerText = text

        document.body.appendChild(tooltiBox)
        return tooltiBox
    }

}