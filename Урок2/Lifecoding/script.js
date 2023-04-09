let phoneBook = [
    {
        name: "Ира Кудрявцева",
        age: 23,
        mobile: 8_987_302_29_23,
        home: 43-23-11
    },
    {
        name: "Ира Кудрявцева",
        age: 23,
        mobile: 8_987_302_29_23,
        home: 43-23-11
    },
    {
        name: "Ира Кудрявцева",
        age: 23,
        mobile: 8_987_302_29_23,
        home: 43-23-11
    },
    {
        name: "Ира Кудрявцева",
        age: 23,
        mobile: 8_987_302_29_23,
        home: 43-23-11
    },
    {
        name: "Ира Кудрявцева",
        age: 23,
        home: 43-23-11
    }
];

let body = document.body;
let container = document.createElement('div')
container.classList.add("container")
body.prepend(container)

function createCard(_name, _age, _mobile, _home) {
    let div = document.createElement('div');
    div.classList.add("card")
    let h2 = document.createElement('h2')
    h2.classList.add("name")
    let ul = document.createElement("ul")
    ul.classList.add("list")
    let age = document.createElement("li")
    age.classList.add("item")
    let mobile = document.createElement("li")
    mobile.classList.add("item")
    let home = document.createElement("li")
    home.classList.add("item")

    let deleteBtn = document.createElement("button");
    let setBtn = document.createElement("button");
    deleteBtn.classList.add("delete")
    setBtn.classList.add("set")

    h2.textContent = _name
    age.textContent = `Возраст: ${_age}`
    mobile.textContent = `Мобильный: ${_mobile}`
    home.textContent = `Домашний: ${_home}`
    deleteBtn.textContent = "Удалить"
    setBtn.textContent = "Редактировать"

    div.append(h2)
    div.append(ul)
    div.append(deleteBtn, setBtn)

    if(_age != undefined) {
        ul.append(age)
    }
    if(_mobile != undefined) {
        ul.append(mobile)
    }
    if(_home != undefined) {
        ul.append(home)
    } 
}

for (let index = 0; index < phoneBook.length; index++) {
    const element = phoneBook[index];
    createCard(element.name, element.age, element.mobile, element.home)
}

let form = document.getElementById("form")
form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let mobile = document.getElementById("mobile")
    let home = document.getElementById("home")

    let newItem = function(_name, _age, _mobile, _home) {
        this.name = _name
        this.age = _age
        this.mobile = _mobile
        this.home = _home
    }
    phoneBook.push(newItem)

    document.querySelector(".form_box").classList.remove("open")
})