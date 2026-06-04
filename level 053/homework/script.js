// 2
let isAdmin = true;  
let res = isAdmin === true ? console.log("ყველა უფლება") : console.log("შეზღუდული უფლება")


// 3
let userInp = Number(prompt('enter num'))
let result = userInp % 2 === 0 ? console.log('თქვენი რიცხვი ლუწია') : console.log('თქვენი რიცხვი კენტია')


// 4
let price = Math.floor(Number(prompt('enter product price')))
let a = price >= 50 ? console.log('მიწოდება უფასოა') : console.log('მიწოდება ღირს 5 ლარი')


// 5
let DarkMode = true;
let b = DarkMode === true ? console.log('background color is black') : console.log('background color is white')


// 6
let stock = Number(prompt('შემოიყვანეთ მარაგის რაოდენობა'))
let res2 = stock > 0 ? console.log('ხელმისაწვდომია') : console.log('ამოიწურა')


// 7
let temp = Number(prompt('enter temperatur'))
let res3 = temp > 30 ? console.log('ცხელა') : (temp >= 15 && temp < 30) ? console.log('თბილა') : console.log('ცივა');


// 8
let password = prompt('enter password')
let pslen = password.length
let res4 = pslen < 8 ? console.log('სუსტი') : pslen < 12 ? console.log('საშუალო') : console.log('ძლიერი');


// 9
let promoCode = prompt('enter promo code')
let res5 = promoCode === "SAVE10" ? console.log('თქვენ მიიღეთ 10 ლარის ფასდაკლება') 
: promoCode === "SAVE20" ? console.log('თქვენ მიიღეთ 20 ლარის ფასდაკლება')
: console.log('ამ პრომოკოდს ფასდაკლება არ აქვს')


// 10
let age = Number(prompt('enter your age'))
let v1 = age < 12
let v2 = age <18
let v3 = age > 18
let res6 = v1 ? console.log('ბავშვი') : v2 ? console.log('მოზარდი') : v3 ? console.log('ზრდასრული') : console.log('eror')


// 11
let isVIP = prompt('are you VIP(yes/no)')
let total = Math.floor(Number(prompt('enter total')))
let res7 = isVIP === 'yes' ? console.log('თქვენ გაქვთ 30%-იანი ფასდაკლება')
: isVIP === 'no' && total > 200 ? console.log('თქვენ გაქვთ 15%-იანი ფასდაკლება')
: console.log('თქვენ არ გაქვთ ფასდაკლება')


















