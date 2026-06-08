// 1
function rollDice(){
    let a = Math.floor(Math.random()*6 +1)
    if (a === 6 || a === 5){
        console.log('თქვენ მოიგეთ')
    }else{
        console.log('თქვენ წააგეთ');
    }
}


// 2
function calculator() {
    let num1 = Number(prompt('enter num1'))
    let num2 = Number(prompt('enter num2'))
    let operator = prompt('enter operator (+, -, *, /)')
    switch(operator){
        case '+' : console.log(num1 + num2); break;
        case '-' : console.log(num1 - num2); break;
        case '*' : console.log(num1 * num2); break;
        case '/' : console.log(num1 / num2); break;
    }
}


// 3
let student = true
let age = Number(prompt('enter your age'))
student || age <18 ? console.log('ბილეთი ღირს 10 ლარი') : console.log('ბილეთი ღირს 15 ლარი')


// 4
function roundingNumber(num) {
  return (num % 1 >= 0.5) 
    ? Math.ceil(num) 
    : Math.floor(num);
}


// 5
let day = prompt('enter week day by num(1-7)')
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('სამუშაო დღეა')
        break
    case 6:
    case 7:
        console.log('დასვენების დღეა')
        break  
}


// 6
function sqrt(num) {
    return num >= 0 ?  Math.sqrt(num) : 'შეცდომა';   
}


// 7
let age = Number(prompt('enter your age'))
let res =  (18>= age && age < 60) ? 'შეგიძლიათ შეხვიდეთ' : 'წადი ბავშვი დაიძინე'


// 8
function nextLevel() {
    let score = Number(prompt('enter your score'))
    let hasKey = prompt('do you found key( yes/no )')
    return (score >=50 && hasKey === 'yes') ? 'თქვენ გადადიხართ შემდეგ დონეზე' : 'თქვენ ვერ გადადიხართ შემდეგ დონეზე'
}


// 9
function findMin(num1,num2,num3) {
    return Math.min(num1, num2, num3)
}


// 10
let name = prompt('enter your name')
let password = prompt('enter your password')
console.log((name === "admin" && password === "12345") ? 'ავტორიზაცია წარმატებითია' : 'ავტორიზაცია ვერ შესრულდა');