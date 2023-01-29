
const form = document.querySelector('.form-test-drive')
// https://jsonplaceholder.typicode.com



form.addEventListener('submit', (event) => {
    event.preventDefault()

    // У нашей формы 'form', как у объекта, есть свойство elements
    // Доступ к этому свойству можно получить через console.dir
    // console.dir(form);

    // Создадим объект
    let data = {}

    // В фигурных скобках использована деструкткризация
    for (let {name, value} of form.elements) {
        // Отсекаем лишний элемент - кнопку
        if(name) {
            data[name] = value
        }
        
    }


// POST запрос

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.status === 200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error (response.status)
        }
    })
    .then (data => {
        alert('Данные ушли успешно!')
        form.reset()
    })
    .catch(error => {
        alert('Произошла ошибка. Статус ' + error.message)
    })
})








//     GET запрос
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => {
//         if(response.status === 200 || response.status === 201) {
//             return response.json()
//         } else {
//             throw new Error (response.status)
//         }
//     })
//     .then (data => {
//         console.log(data);
//     })
//     .catch(error => {
//         alert('Произошла ошибка. Статус ' + error.message)
//     })
//})