// 1
// let userInp = prompt('enter number')
// let randomNumber = Math.floor(Math.random() * 4)+1 // აქ +1 რადგა პირობის თანახმად უნდა გამომეტანა  1-დან 5-მდე  ანუ უნდა გამოსულიყო 1,2,3,4
// if(userInp == randomNumber){
//     console.log('გამოიცანი!')
// }else{
//     console.log(`ვერ გამოიცანი, ჩაფიქრებული იყო: ${randomNumber}`)
// }


// 2
// let a = Number(prompt('შეიყვანე შენი ადგილის ნომერი'))
// let b = Math.ceil(a/5)

// if(a<=0){
//     console.log("არასწორი ადგილი")
// }else{
//     console.log(`თქვენი ადგილია მე-${b} რიგში`)
// }


// 3
// let a = Number(prompt('შემოიყვანეთ საწყისი ფასი'))
// let b = Math.round(a - (a/100)*15) //ანუ თან დავამრგვალე და თან 15 პროცენტი დავაკელი

// if(b>50){
//     console.log('ძვირია')
// }else{
//     console.log('მისაღები ფასია')
// }


// 4
// let a = Number(prompt('შეიყვანეთ თქვენი საბანკო ბალანსი'))
// let b = Math.sign(a)

// if(b === -1){
//     console.log('"თქვენ გაქვთ დავალიანება"')
// }else if(b === 0){
//     console.log("თქვენი ბალანსი ნულია")
// }else{
//     console.log("თქვენს ანგარიშზე არის თანხა")
// }


// 5
// let a = Number(prompt('შემოიტანეთ კვადრატის გვერდის სიგრძე'))
// let b = Math.pow(a ,2)
// if(b>=100){
//     console.log("დიდი ფართობი")
// }else{
//     console.log("პატარა ფართობი")
// }


// 6
// let a = Number(prompt('შეიყვანეთ პირველი მებრძოლის სიცოცხლის ქულა'))
// let b = Number(prompt('შეიყვანეთ მეორე მებრძოლის სიცოცხლის ქულა'))
// let c = Math.max(a, b)
// if(c<50){
//     console.log('ორივე მებრძოლე სუსტია')
// }else{
//     console.log(c)
// }


// 7
// let a = Number(prompt('ნივთის ფასი პირველ მაღაზიაში'))
// let b = Number(prompt('ნივთის ფასი მეორე მაღაზიაში'))
// let c = Number(prompt('ნივთის ფასი მესამე მაღაზიაში'))
// let d = Math.min(a,b,c)

// if(d<10){
//     console.log("ძალიან იაფია!")
// }else{
//     console.log(d)
// }


// 8
// let cat1 = Math.pow(Number(prompt('შემოიყვანეთ სამკუთხედის პირველი კათეტი')),2)
// let cat2 = Math.pow(Number(prompt('შემოიყვანეთ სამკუთხედის მეორე კათეტი')),2)
// let hip = Math.sqrt(cat1+cat2)
// if(hip>10){
//     console.log("გრძელი სამკუთხედი")
// }else{
//     console.log("მოკლე სამკუთხედი")
// }


// 9
// let a = Number(prompt('შემოიყვანე ნებისმიერი რიცხვი'))
// if(Number.isInteger(a) === true){
//     console.log("თქვენ შეიყვანეთ მთელი რიცხვი")
// }else{
//     console.log("თქვენ შეიყვანეთ ათწილადი რიცხვი")
// }


// 10
// let a = Number(prompt('შემოიყვანე მთელი რიცხვი 1-დან 6-ის ჩათვლით'))
// let b = Math.floor(Math.random() * 6)+1 // რადგან პირობაში გვიწერია 1-დან 6-მდე მაგრამ კამათელი 1-დან 6-ის ჩათვლითაა დავწერე ესე
// if(Number.isInteger(a) === true){
//     if(a === b){
//         console.log('თქვენ მოიგეთ')
//     }else{
//         console.log('თქვენ წააგეთ')
//     }
// }else{
//     console.log('შეცდომა!')
// }













