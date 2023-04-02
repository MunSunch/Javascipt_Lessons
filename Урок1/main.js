console.log("Hello World!")
// Обьявление переменной
var a = 10
console.log(a)

let b = 'string'
console.log(b)
// var переменная видна везде, let видна только с той строки, где объявлена


// Обьявление с const
const c = true

// Определить тип данных
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

// Мемчик со строкой
let q = 2
let s = '2'
console.log(q + s)


// Сложные типы
let arr = []
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)


let obj = {
    name: 'Munir',
    age: 24,
    isMarried: false
}

console.log(obj.age)


// Другие типы
// Undefined - не проинизиализированный обьект, null - инициализированный объектом null
let g = null
console.log(typeof(g))

function square(n) {
    console.log(n * n)
}
square(22)





//                      Операторы
// Логические
let status = true
if(!status && status) {
    console.log("true")
} else {
    console.log("false")
}