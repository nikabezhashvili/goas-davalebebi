/*
1) თქვენი სიტყვებით ახსენით რა არის localStorage და რისთვის გამოიყენება? 
localStorage არის შემნახველი ადგილი რომელიც არის მხოლოდ ჩვენ კომპიუტერზე 
და რასაც ჩავსვავთ იქ ყველაფერი შეინახება იქამდე სანამ ჩვენ არ წავშლით

----

2) 
getItem - გამოიყენება იმისთვის რომ localStorage-დან წამოვიღოთ ელემენტი
setItem - გამოიყენება იმისთვის რომ მნიშვნელობა ჩავამატოთ localStorage-ში
JSON.stringify - გამოიყენება იმისთვის რომ localStorage-ში მონაცემი სწორ მონაცემთა ტიპით ჩაემატოს
JSON.parse() - გამოიყენება იმისთვის მონაცემი სწორად ამოიკითხოს localStorage-დან
removeItem - გამოიყენება იმისთვის რომ localStorage-დან კონკრეტული ელემენტი ამოვიღოთ
clear - გამოიყენება იმისთვის რომ localStorage მთლიანად გასუფთავდეს
*/


// 3) 
localStorage.setItem('color', JSON.stringify('black'))

// 4) 
console.log(localStorage.getItem('color'));

// 5)

localStorage.removeItem('color')

// 6) 
localStorage.setItem('name', JSON.stringify('nika'))
localStorage.setItem('age', JSON.stringify('15'))

localStorage.clear()