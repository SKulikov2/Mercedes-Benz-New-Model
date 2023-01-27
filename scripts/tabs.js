// DOM элементы

// Такой синтаксис позволит достать элемент из HTML по атрибуту
const tabButtons = document.querySelectorAll('[data-tabs-handler]')
const tabContentFields = document.querySelectorAll('[data-tabs-field]')
console.log(tabContentFields);

// Используем for of вместо for each
for(let btn of tabButtons)  {
    btn.addEventListener('click', () => {
        tabButtons.forEach((Item) => {
            Item.classList.remove('design-list__item_active')
            btn.classList.add('design-list__item_active')
        })
        // Такой синтаксис помогает вывести в консоль значение датаатрибута
        //console.dir(btn.dataset.tabsHandler)

        tabContentFields.forEach((content) => {
            if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}
    
