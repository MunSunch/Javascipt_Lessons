// Создать элемент
let body = document.body
let div = document.createElement('div')
div.classList.add('box-num')
body.append(div)

// Найти и изменить элемент
let text = document.getElementsByClassName("text")
let array = String(text).split(' ')
console.log(array)
console.log(text)


let btnPlus = document.createElement('button')
btnPlus.classList.add("plus")
btnPlus.textContent = '+'

let btnMunis = document.createElement('button')
btnMunis.classList.add("minus")
btnMunis.textContent = '-'

let span = document.createElement('span')
span.textContent = 0

div.append(btnPlus, span, btnMunis)



// Обработчик событий
btnPlus.addEventListener('click', function() {
    span.textContent++
})

btnMunis.addEventListener('click', function() {
    span.textContent--
})