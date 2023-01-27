// DOM элементы

const burgerBtn = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const menuList = document.querySelectorAll('.menu-list__item')


// Объявляем функцию, которая будет отвечать за открытие/закрытие
// мобильного меню по клику на бургер

const toggleMenu = () => {
    menu.classList.toggle('menu-active')
    burgerBtn.classList.toggle('humburger-menu-active')
}

// Вешаем обработчик на кнопку
burgerBtn.addEventListener('click', () => {
    toggleMenu()
})

// Меню автоматически закрывается после клика на ту или иную его строку. Решил сделать через for of
for (let item of menuList ) {
        item.addEventListener('click', () => {
            menu.classList.remove('menu-active')
        })    
    }
    


// По клику на бургер открывается мобильное меню. 
//Далее бургер становится крестиком и по клику на него мобильное меню закрываем
/* Этот код пришел на ум в первую очередь
burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    burgerBtn.classList.toggle('humburger-menu-active')
})
*/