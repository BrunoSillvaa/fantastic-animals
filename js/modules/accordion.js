export default function initAccordion() {
    const faqQuestion = document.querySelectorAll('[data-anime="accordian"] dt')
    const activeClass = 'active'

    // Verifies if exists descriptions
    if (faqQuestion.length) {
        faqQuestion[0].classList.add(activeClass)
        faqQuestion[0].nextElementSibling.classList.add(activeClass)
    
        function openQuestion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        faqQuestion.forEach((question) => {
            question.addEventListener('click', openQuestion)
        })
    }
}