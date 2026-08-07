// // 1
// innerHTML ის დანიშნულებაა რომ კონტენტი შეცვალოს და ასევე ახალი დაამატოს ხოლო innerText-ის დანიშნულებაა კონტენტის შეცვლა
// განსხვავება innerHTML-სა და innerText-ს შორის არის ის რომ innerHTML შეგვიძლია ახალი კონტენტის დამატება

// 

// // 2
// let p = document.getElementById('p')
// console.log(p.textContent = 'new contents');

// // 3
// let task3_p = document.getElementsByClassName('task3')
// for (let i = 0; i < task3_p.length; i++) {
//     console.log(task3_p[i].textContent = 'new text content for task3');
// }

// // 4
// let h1 = document.getElementsByTagName('h1')
// for (let i = 0; i < h1.length; i++) {
//     console.log(h1[i].textContent = 'changed text content for task 4');
// }


// // 5
// let task_5 = document.getElementById('task5')
// console.log(task_5.innerHTML = 'text for task 5');

// // 6
// task_6 = document.getElementById('task6')
// console.log(task_6.innerText = 'text after modify');

// // 7
// let task7 = document.getElementById('task7')
// task7.style.color = 'yellow'
// task7.style.fontSize = '2rem'
// task7.style.backgroundColor = 'red'
// task7.style.textAlign = 'center'
// task7.textContent = 'text after style'
// console.log(task7);



// // 8
// let task8 = document.getElementById('main-title')
// console.log(task8.textContent = 'DOM Mastery Achieved!');

// // 9
// let task9 = document.querySelector('.card p');
// task9.textContent = '<strong>Alert!</strong> Content has changed.';

// // 10
// let task10 = document.querySelector('.card_2 p')
// task10.innerHTML = `<h2>Featured Item</h2><button>View</button>`

// // 11
// let task11 = document.querySelectorAll('li')
// task11.forEach((elem, i) => {
//     elem.textContent = `List Item ${i}`
// });

// // 12
// let task12 = document.querySelectorAll('.badge')
// task12.forEach(i => {
//     i.textContent = 'Active'
// });

// 13
let a = document.querySelector('#featured_card a')
a.href = 'https://example.com'

// 14
let btn = document.getElementById('action-btn')
btn.className = 'primary-button'
console.log(document.getElementsByClassName('primary-button'));

// 15
const card = document.querySelector('.card.featured');
card.classList.remove('featured');
card.classList.toggle('active');

// 16
const card = document.querySelector('#card');

console.log("textContent:", card.textContent);
console.log("innerHTML:", card.innerHTML);

// 17
let divs = document.querySelectorAll('div')
let count = divs.length
console.log(`total divs : ${count}`);
alert(`total divs : ${count}`);
