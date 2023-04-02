let road = [false, false, false, true, false, true, false, false]
let health = 2
let i
for(i = 0; i < road.length; i++) {
    let isTrap = road[i]
    if(!isTrap) {
        console.log(`Танк переместился на ячейку ${i+1}`)
    } else {
        health -= 1
        if(health == 0) {
            console.log("Танк уничтожен")
            break
        }
        console.log(`Танк поврежден на ячейке ${i+1}`)
    }
}
if(health != 0) {
    console.log("Танк прошел минное поле")
} else {
    console.log(`Танк не прошел минное поле и был уничтожен на ячейке ${i+1}`)
}