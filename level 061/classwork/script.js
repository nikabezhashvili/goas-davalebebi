
// 1
// for in გამოიყენება ობიექტის გასაღებებზე/სახელზე გადასავლებლად

// for of თითქმის იგივე რაც for in ის  გამოიყენება ობიექტის მნიშვნელობებზე გადასავლებლად

// while გამოიყენება მაშინ როცა არ ვიცით რამდენჯერ უნდა გავიმეოროთ ერთი და იგივე კოდი

// do while არის while-ის ძველი ვერსია ანუ თითქმის იგივეა რაც while მაგრამ განსხვავება ის არის რომ 
// do while ჯერ აკეთებს და მერე პირობას ამოწმებს

// break გამოიყენება იმისთვის რომ ჩვენთვის სასურველ მნიშვნელობის მიღწევისას ციკლი გაჩერდეს და აღარ მეორდებოდეს

// 2
let pin = 1234
let userPin
while (pin !== userPin) {
    userPin = Number(prompt('enter pin'))
    if (userPin === pin) {
        alert("პაროლი სწორია!");
    }else{
        alert("პაროლი არასწორია!");
    }
}


// 3
let fruits = ['ვაშლი', 'ბანანი', 'ატამი']
for ( let i of fruits) {
    console.log(`მე მიყვარს ${i}`);
}

// 4
count = 1
while (count <= 5) {
    console.log(count);
    count++
}

// 5
// Higher-order function  არის ფუნქცია რომელიც an იღებს სხვა ფუნქციას არგუმენტად/აბრუნებს ფუნქციას შედეგად
// Callback function ფუნქცია რომელიც სხვა ფუნქციას არგუმენტად იღებს

// 6
function robot(number, action) {
    return action(number);
}
function double(x) {
    return x * 2;
}

function triple(y) {
    return y * 3;
}
console.log(robot(5, double))
console.log(robot(5, triple))

// 7)
const friends = ["გიორგი", "ნინო", "დავით", "მარიამ", "ლუკა"];

friends.forEach(function(name) {
    console.log(`გამარჯობა ${name}`);
});