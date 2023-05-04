export default function initTabNav() {
    const tabList = document.querySelectorAll('[data-tab="list"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')

    // Verifies if exists section content
    if (tabList.length && tabContent.length) {
        tabContent[0].classList.add('active')

        function tabActive(index) {
            // Removes the 'Active' class from all elements
            tabContent.forEach((item) => {
                item.classList.remove('active')
            })
            const animDirec = tabContent[index].dataset.anime
            // Adds the 'active' class in the descriticion of the selected image
            tabContent[index].classList.add('active', animDirec)
        }

        tabList.forEach((item, index) => {
            item.addEventListener('click', () => {
                tabActive(index)
            })
        })
    }
}