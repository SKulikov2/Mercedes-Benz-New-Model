
// DOM элементы
const btnsDesign = document.querySelectorAll('.design-list__item')
const designDescr = document.querySelectorAll('.design__descr')

// Работаем с блоком "Дизайн кузова" / "Дизайн салона"
btnsDesign.forEach((btnDesign, index) => {
    btnDesign.addEventListener('click', () => {
        btnsDesign.forEach((btnDesignItem, idx) => {
            if(btnDesignItem === btnDesign) {
                btnDesignItem.classList.toggle('design-list__item_active')
                designDescr[idx].classList.remove('hidden')
            } else {
                btnDesignItem.classList.remove('design-list__item_active')
                designDescr[idx].classList.add('hidden')
            }
        })  

    })
})
