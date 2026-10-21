// 1) შექმენი promise checkAge, 
// რომელიც თუ ასაკი არის 18 ან მეტი 
// resolve-ით დააბრუნებს "You are an adult", 
// თუ ასაკი არის 18-ზე ნაკლები - reject-ით "You are a child", 
// შემდეგ გამოიძახე პრომისი და გამოიყენე .then() და .catch() მისი განფუთვისთვის. 
// არ დაგავიწყდეს ასევე .finally() მეთოდის გამოყენება საბოლოო დამშვიდობების 
// ტექსტის გამოსატანად.
let age = 18
const checkAge = new Promise((resolve, reject) => {
    if (age>=18) {
        resolve('You are an adult')
    } else {
        reject("You are a child")
    }
})

checkAge
.then((res)=>console.log(res))
.catch((err) => console.log(err))
.finally(()=> console.log('აქ რავი ვერ მოვტვინე რა გამოვატანინო'))
