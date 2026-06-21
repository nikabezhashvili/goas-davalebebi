// 1
const party = (isInList = false, hasGift = false) => {
    return (isInList || hasGift) ? "შეგიძლია წვეულებაზე შესვლა" : "ვერ შედიხარ წვეულებაზე";
};

// 2
const disc = function (tick) {
    switch (tick) {
        case 'Gold':
            console.log('თქვენ გაქვთ 50%-იანი ფასდაკლება')
            break;
    
        case "Silver":
            console.log('თქვენ გაქვთ 30%-იანი ფასდაკლება')
        break;
        case "Bronze":
            console.log('თქვენ გაქვთ 15%-იანი ფასდაკლება')
        break;
    }
}


// 3
num = Number(prompt('enter number'))
mynum = Math.floor(Math.random() * 5) + 1

const task3 = () => {
    console.log(
        (num > mynum) ? `თქვენი რიცხვი '${num}' მეტია ვიდრე, ${mynum}`
        : `თქვენი რიცხვი '${num}' ნაკლებია ვიდრე ${mynum}`
    );
}


// 4
age = Number(prompt('enter your age'))
const driv = () => {
    console.log(
        (age >= 18) ? `თქვენ შეგიძლიათ მანქანის მართვა რადგან ხართ ${age} წლის` 
        : `თქვენ არ შეგიძლიათ მანქანის მართვა რადგან ხართ ${age} წლის`
    );
}


// 5
batteryLevel = Number(prompt('enter battery level'))
isCharging = prompt('phon is charging?(yes/no)')
const task5 = function () {
    console.log(
        (batteryLevel<20 && isCharging === 'no') ? `ჩართულია ენერგიის დამზოგავი წითელი ფერი` 
        : `ენერგიის დამზოგავი თეთრი ფერია`
    );
    
}


// 6
goal = Math.floor(Math.random()*3)
function match() {
    switch (goal) {
        case 0:
            console.log('წააგო' );
            break;
        case 1:
            console.log('ფრე' );
            break;
        case 2:
            console.log('მოიგო' );
            break;
    }
    
}


// 7
const hotel = (type = "standard") => {
    switch (type) {
        case "standard":
            console.log('სტანდარტული ნომრის დაჯავშნა ღირს 30 ლარი/დრე');
            break;
        case "suite":
            console.log('ლუქსი ნომრის დაჯავშნა ღირს 60 ლარი/დრე');
            break;
    }
}

// 8
const onlineGrade = function (grade) {
    return grade>90 ? console.log('A') : grade>70 ? console.log('B') : console.log('F');
}

// 9 
let cost = Number(prompt('შემოიყვეანეთ კალათის ჯამი'))
let cupon = Number(prompt('გაქვთ თუ არა კუპონი'))

const task9 = () => 
    (cost > 100 && cupon === "SALE") 
        ? console.log(`თქვენ გაქვთ 10 ლარიანი ფასდაკლება გადასახდელი თანხაა ${cost - 10}`) 
        : console.log(`თქვენ არ გაქვთ ფასდაკლება გადასახდელი თანხაა ${cost}`);
task9();


// 10
const task10 = num => (num > 0) ? console.log(num) : console.log(num * -1);
task10();
