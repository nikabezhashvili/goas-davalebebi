// 1
localStorage.setItem('name', JSON.stringify('nika'))
localStorage.setItem('age', JSON.stringify('15'))
localStorage.setItem('email', JSON.stringify('nikabezhashvili0@gmail.com')) //მაინც იცი

console.log(JSON.parse(localStorage.getItem('name')));
console.log(JSON.parse(localStorage.getItem('age')));
console.log(JSON.parse(localStorage.getItem('email')));

// 2
localStorage.removeItem('age')
localStorage.setItem('age', JSON.stringify('20')) // დამაბერა 😅
localStorage.setItem('list', JSON.stringify(['hello world','რავი ესეც იყოს']))
localStorage.clear()