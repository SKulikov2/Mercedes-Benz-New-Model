// DOM элементы
const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const mainButton = document.querySelector('.main__button')


// Работаем с шапкой страницы + с кнопкой 'стрелка вниз', которая располагается ниже кнопки тест-драйв

// Используем спред оператор, который объединит все элементы linksHead и mainScroll для перебора в цикле
const newArr = [...linksHead, mainScroll, mainButton]


newArr.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        
        /*Этот синтаксис убирает стандартное поведение ссылок, в данном случае 
        мы уберем прокрутку до блока*/
        event.preventDefault()
        
        /*Объявляем переменную ID и записываем в неё значение из атрибута href, 
        отрезая первый элемент (#) с помощью метода substr */ 
        const ID = event.target.getAttribute('href').substr(1)
        
        /*реализовываем прокрутку до нужного элемента с помощью метода ScrollIntoView.
        behavour задает скорость прокрутки, block задает место до которого пркручиваем*/
        document.getElementById(ID).scrollIntoView ({
            behavior:"smooth",
            block: 'start'
        });
    })
})