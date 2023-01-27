// DOM элементы

// Такой синтаксис позволит достать элемент из HTML по атрибуту
const tabButtons = document.querySelectorAll('[data-tabs-handler]')
const tabContentFields = document.querySelectorAll('[data-tabs-field]')
const designTitle = document.querySelectorAll('.design__title')



// Используем for of вместо for each. При нажатии кнопки она становится активной
for(let btn of tabButtons)  {
    btn.addEventListener('click', () => {
        tabButtons.forEach((Item) => {
            Item.classList.remove('design-list__item_active')
            btn.classList.add('design-list__item_active')
        })
        
        // В этой части кода меняем описание и фото по нажатию кнопки
        /* Такой синтаксис помогает вывести в консоль значение датаатрибута
        console.dir(btn.dataset.tabsHandler) */

        tabContentFields.forEach((content) => {
            if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
// Меняем скрытый заголовок h2 по нажатию кнопки
        designTitle.forEach((text) => {
            if(text.dataset.tabsHandler === btn.dataset.tabsHandler) {
                text.classList.remove('hidden')
            } else {
                text.classList.add('hidden')
            }
        })


    })
}
    
