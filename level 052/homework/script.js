// 2
let user = prompt("შეიყვანე სახელი");

if (!user) {
    console.log("სისტემაში ვერ შეხვედით");
} else {
    console.log("სისტემაში შეხვედით");
}


// 3
let age = Math.floor(prompt("Enter your age:"));

if (age > 0 && age <= 110) {
  console.log("Valid age: " + age);
} else {
  console.log("Invalid age");
}


// 4
let userName = prompt('enter your name') || 'Truthy'
console.log(`სალამი ${userName}`)


// 5
let c = Number(prompt('enter first number'))
let d = Number(prompt('enter second number'))
let result = (b && Math.round(c / d)) || "Division by zero";
console.log(result);


// 6
let e = prompt('enter code')
let f = Number(prompt('enter your score'))
if(e === '12345'){
    console.log(`საბოლოო ქულა არის ${Math.pow(f,2)}`)
}else{
    console.log(`საბოლოო ქულა არის ${f}`)
}


// 7
g = Number(prompt('enter num (1-100)'))
if(!Number.isInteger(g) || a<1 || a>100){
    console.log('uncorect')
}else{
    console.log(`your number is in 1-100 diapason: ${a}`)
}



// 8
let h = Math.floor(Math.random()*100)+1
let i = Math.floor(Math.random()*100)+1
let j = Number(prompt('შეიყვანეთ ნებისმიერი რიცხვი'))
if(j > h && j > i){
    console.log('შენ მოიგე')
}else{
    console.log(`თქვენ წააგეთ თქვენი რიცხვი უნდა ყოფილიყო ${Math.max(h,i)}-ზე მეტი`)
}


// 9
let a = Number(prompt('enter temperature'))
let b = Math.sign(a)
if(b === 1){
    console.log('ძალიან მაღალი ტემპერატურაა')
}else if(b === 0){
    console.log('ტემპერატურას არაუშავს')
}else{
    console.log('უარყოფითი ტემპერატურაა')
}

// 10
let pr1 = prompt('enter price 1') || Infinity
let pr2 = prompt('enter price 2') || Infinity
let pr3 = prompt('enter price 3') || Infinity
let minpr = Math.min(pr1,pr2,pr3)
if (pr1){
    console.log(pr1)
}else if(pr2){
    console.log(pr2)
}else if(pr3){
    console.log(pr3)
}else{
    console.log(minpr);
}


// 11
let cat1 = Number(prompt('enter cat1'))
let cat2 = Number(prompt('enter cat2'))
if(Boolean(cat1) == false || Boolean(cat2) == false){
    console.log('არასწორად შემოყვანილი მნიშვნელობა');   
}else{
    if ((Number.isInteger(cat1) && cat1 >0) && (Number.isInteger(cat2) && cat2 >0 )){
        let hip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2))
        console.log(Math.floor(hip))
    }else{
        if(cat1 < 0){
            console.log('პირველი მნიშვნელობა ნაკლებია 0-ზე')
        }else{
            console.log('მეორე მნიშვნელობა ნაკლებია 0-ზე')
        }
    }
}

