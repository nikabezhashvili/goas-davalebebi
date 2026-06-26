// 1 პოვერ პოინტს ვერ ვიყენებ


// 2
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 3
let numbers = [4, 8, 15, 16, 23, 42]
let sum = 0
for (let c = 0; c < numbers.length; c++) {
    sum +=numbers[c]
}
console.log(sum);


// 4
let fruits = ['ვაშლი', 'ბანანი', 'მარწყვი', 'კივი']
for (let d of fruits) {
    console.log(`${d} - ${d.length} ასო`);
}


// 5
let word = "პროგრამირება"
for (let e of word) {
    console.log(e);
}


// 6
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
}
for (let f in car) {
    console.log(`${f}: ${car[f]}`);
}


// 7
let shoppingCart = { 
    პური: 2,
    რძე: 4,
    ყველი: 10, 
    კვერცხი: 5,
}
let sum1 = 0
for (let g in shoppingCart) {
    sum+=shoppingCart[g]
}
console.log(sum);


// 8
let h = 10
while (h>0) {
    console.log(h);
    h--
}
console.log('გაშვება!');


// 9

let k = 1
while (true) {
    if (k % 7 === 0 && k % 5 === 0) {
        console.log(k);
        break
    }
    k++
}


// 10
let j;
do {
    j = Math.floor(Math.random() * 6) + 1;
    console.log(j);
    break
} while (j !== 6);


// 11
let students = [
    { name: 'ანა', score: 85 },
    { name: 'ნიკა', score: 42 },
    { name: 'მარიამი', score: 91 },
    { name: 'ლაშა', score: 38 }
];

for (let a of students) {
    if (a.score > 50) {
        console.log(a.name);
    }
}
