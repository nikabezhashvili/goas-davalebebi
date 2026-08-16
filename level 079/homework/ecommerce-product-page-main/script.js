let img = document.getElementById('img')
change1 = () => {
    img.src = './images/image-product-1.jpg'
}
change2 = () => {
    img.src = './images/image-product-2.jpg'
}
change3 = () => {
    img.src = './images/image-product-3.jpg'
}
change4 = () => {
    img.src = './images/image-product-4.jpg'
}

let mi = document.getElementById('mines')
let pl = document.getElementById('plus')
let val = document.getElementById('value')
plus = () =>{
    val.innerText = Number(val.innerText) + 1
}
mines = () => {
    if(Number(val.innerText) <= 0){
        val.innerText = '0'
    }else{
        val.innerText = Number(val.innerText) -1
    }
}