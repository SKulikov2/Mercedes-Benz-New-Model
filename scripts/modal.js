// DOM элементы

const modalBtns = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const overlay = document.querySelector('.overlay')

// Модальное окно появляется по клику на 'Узнать больше'
for (button of modalBtns)
button.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

// Этот код заменил то, что закомментировано ниже
modal.addEventListener('click', (event) => {
    const target = event.target
    if(target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})



// Код, который напрашивается в первую очередь

// Модальное окно закрывается по клику на 'крестик'
/*modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})

// Модальное окно закрывается по клику на overlay
overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
})
*/