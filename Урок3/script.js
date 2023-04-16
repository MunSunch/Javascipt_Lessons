// Request example
let url = 'https://jsonplaceholder.typicode.com/albums/photos'
// fetch(url)
//       .then(response => response.json())
//       .then(json => json.map(item => console.log(item.title)))


// Чаще всего оборачивают в функцию. Здесь она синхронная
// function getPost(url) {
//     const response = fetch(url)
//     return response.then(response => response.json())
// }

// getPost(url)
//     .then(json => json.map(item => console.log(item.title)))

url = 'https://jsonplaceholder.typicode.com/photos'
// Для асинхронных функция выделяется отдельный поток на выполнение
async function getPost(url) {
    const response = await fetch(url)
    data = response.json()
    return data
}

getPost(url).then(json => json.map(item => {
    let urlImage = item.url
    let swapper = document.getElementsByClassName('swiper-wrapper')
    let div = document.createElement('div')
    div.classList.add('swiper-slide')
    
    swapper.append(div)
}))


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});