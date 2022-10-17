const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content')

function pageTransition() {
    sectBtns.forEach(function (btn) {
        btn.addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    })
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id
        if (!id) return
            sectBtns.forEach(btn => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            sections.forEach((section) =>  {
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            .classList.add('active')
    })
    // theme toggle
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () => {
        let element = document.body
        .classList.toggle('light-mode')
    })
}
pageTransition()