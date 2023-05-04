export default function sectionAnimation() {

    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const halfHeight = window.innerHeight * 0.95

    if (sections) {
        function animateSec() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                if (sectionTop < halfHeight) {
                    section.classList.add('active')
                }
            })
        }

        window.addEventListener('scroll', animateSec)
    }
}