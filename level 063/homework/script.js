// 1
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2
let count = 10
while (true) {
    console.log(count);
    if (count === 0) {
        break
    }
    count--
}


// 3
let userinp
do {
    userinp = prompt('enter word')
} while (userinp !== 'secret');


// 4
let arr1 = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];
for (let fruit of arr1) {
    console.log(fruit);
}


// 5
car = {
    brand: "Toyota",
    model: "Prius",
    year: 2020
}
for (let a in car) {
    console.log(a, car[a]);
}


// 6
let sum = 0;
let arr2 = [5,10,15,20,25];
for(let num of arr2){
    sum += num;
}


// 7
let nums = 123456
let count = 0
while (nums > 0) {
    nums = Math.floor(nums / 10)
    count++
}
console.log(count)


// 8
products = {
    milk: 3,
    bread: 2, 
    cheese: 10 
}
for (let i in products) {
    products[i] *= 2
}
console.log(products)


// 9
let totalSum = 0;
let userInput;
do {
    userInput = Number(prompt("შეიყვანეთ რიცხვი:"));
    totalSum += userInput;
} while (userInput !== 0);
console.log(totalSum);


// 10
let names = ["ლუკა", "ანი", "ალექსი", "ნინო", "ავთო"];
let aNames = [];
for (let i = 0; i < names.length; i++) {
    if(names[i][0] === 'ა'){
        aNames.push(names[i]);
    }
}
console.log(aNames);