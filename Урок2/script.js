// Область видимости
let global = 1;
console.log(`before: ${global}`)

function f() {
    let global = 2; // перекрывает global в global scope
    console.log(`inner: global = ${global}`)
}
f();

console.log(`after: ${global}`)

// !НЕ ИСПОЛЬЗОВАТЬ VAR, ТАК КАК ОНА ВИДНА ВЕЗДЕ!

// Функцию можно задать и другим способом, чтобы ограничить ее scope
let func = function() {console.log("function")}




// Стрелочные функции(с лямбда-выражениями). Использовать для создания слушателей
const arrow1 = () => {console.log("const arrow")}
arrow1();

// this в стрелочных функциях(Создаем объект без применения class)
function asd(name, age) {
    this.name = name;
    this.age = age;
} 
let instance = new asd("Munir", 24);
console.log(instance)
// Создаем объект при помощи class(устаревший способ)
class MyObject {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let anotherInstance = new MyObject("Munir", 24)
console.log(anotherInstance)

// в стрелочных функциях нельзя использовать this
const ob1 = {
    name: "Munir",
    age: 24,
    getFullName() { 
        console.log(`name: ${this.name}, age: ${this.age}`)
    },
    constGetFullName: () => {console.log(`name: ${this.name}, age: ${this.age}`)}
};
ob1.getFullName();
ob1.constGetFullName();


// callback - это функция, которая передается аргументом другой функции
