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
if(!status && status || status) {
    console.log("true")
} else {
    console.log("false")
}






// преобразование типов данных(явные)
// из других типов в число при помощи стандартной функции
Number("22")

console.log(Number("\t\t 0b111"))
console.log(Number("\t\t 0xA"))

// сравнение с NaN дает false всегда
console.log(NaN == NaN)

// Так как сравнение с NaN всегда дает false, т о используют спец функцию. Проверка на NaN
let t
console.log(isNaN(t))


// в строку
let res = String({})
// res = String(true)
res = String([1,2,3,4,5])
console.log(res)




// преобразование типов данных(неявные)
if("string") {
    console.log("Строка не пустая")
} else {
    console.log("Строка пустая")
}

if("" && 0 || 12.22) {
    console.log(true)
}

// сложение со строкой
console.log('4' + 2)
console.log(2 + '2')
console.log(42 + {})

console.log(typeof(`${1 + 1}`)) // string

if({toString(){return '2'}} == 2) {
    console.log("Преобразование")
}


// строки
let text = 'На ёлке ёжики ещё не перевелись'
let textRes = text.split(' ')
console.log(textRes)

// массивы
let array = [1,2,3,4,5]
array.reverse()
console.log(array.sort())