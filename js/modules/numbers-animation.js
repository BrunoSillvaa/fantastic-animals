export default function numbersAnimation() {
    const section = document.querySelector('.numeros')
    if (section.classList.contains('active')) {
        const numberList = document.querySelectorAll('[data-numero]')
    
        numberList.forEach((number) => {
            const total = +number.textContent
            const incremento = Math.floor(total / 100)
    
            let cont = 0
            let loop = setInterval(() => {
                cont += incremento
                number.textContent = cont
                if (cont > total) {
                    number.textContent = total
                    clearInterval(loop)
                }
            }, 100 * Math.random())
        })
    }
}
 