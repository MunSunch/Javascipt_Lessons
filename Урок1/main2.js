// Создать элемент
let body = document.body
let div = document.createElement('div')
div.classList.add('box-num')
body.append(div)

// Найти и изменить элемент
let ul = document.getElementsByClassName("text")
let array = String(ul.).split(' ')
console.log(array)
console.log(ul)