let p = document.getElementById('p')
console.log(p);
p.style.backgroundColor = 'blue'
p.style.color = 'white'
p.style.fontSize = '1.2rem'
p.style.fontFamily = 'cursive'
p.textContent = "ეს არის ახალი ტექსტი";

let h3 = document.getElementsByClassName('h3')
console.log(h3);
for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = "red";
    h3[i].style.backgroundColor = 'black'
    h3[i].style.fontSize = "24px";
    h3[i].style.fontStyle = "italic";
    h3[i].innerHTML = "შეცვლილი სათაური";
}


let span = document.getElementsByTagName('span')
console.log(span);
for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = 'blue'
    span[i].style.color = 'white'
    span[i].style.fontSize = '1.2rem'
    span[i].style.fontFamily = 'cursive'
    span[i].innerText = "გადაკეთებული სპანი";
}




