// 1
const cafe = {
    name: "კოფი-თაიმი",
    drinks: ["ესპრესო", "კაპუჩინო", "ლატე"],

};

for (let i in cafe) {
    if (i === 'name') {
        console.log(`კაფე: ${cafe.name}`);
    }else if(i === 'drinks'){
        for (let i of cafe.drinks) {
            console.log(`სასმელი: ${i}`);
        }
    }
}

// 2
const trip = {
    country: "იტალია",
    cities: ["რომი", "ფლორენცია", "ვენეცია"],
};

for (let i in trip) {
    if (i === 'country') {
        console.log(`ქვეყანა: ${trip.country}`);
    }else if (i === 'cities') {
        for (let i of trip.cities) {
            console.log(`ქალაქი: ${i}`);
        }
    }
}


// 3
const productsPrice = {
    ტელეფონი: [1200, 1500],
    ლეპტოპი: [2000, 2500],
    ყურსასმენი: [150, 250, 400]
};

for (let i in productsPrice) {
    for (let j of productsPrice[i]) {
        console.log(`კატეგორია: ${i} -> ახალი ფასი: ${j * 0.9}`);
    }
}

// 4
const classGrades = {
    "ჯგუფი A": [10, 9, 8],
    "ჯგუფი B": [7, 10, 6],
    "ჯგუფი C": [5, 8, 7]
};
for (let i in classGrades) {
    for (let j of classGrades[i]) {
        if (j === 10) {
            console.log(`უმაღლესი ქულა იპოვნა -> ${i}`);
        }
    }
}

// 5
const monthlyExpenses = {
    "კომუნალურები": [80, 120, 200],
    "პროდუქტები": [50, 105, 170],
    "გართობა": [15, 200, 90]
};

for (let i in monthlyExpenses) {
    for (let j of monthlyExpenses[i]) {
        if (j > 100) {
            console.log(`დიდი ხარჯი კატეგორიაში ${i}: ${j}`);
        }
    }
}



// 6
const companyStaff = {
    "დეველოპერები": ["ალექსანდრე", "ანი", "გიორგი"],
    "მარკეტინგი": ["მარიამი", "ტოტო", "კონსტანტინე"]
};

for (let i in companyStaff) {
    for (let j of companyStaff[i]) {
        if (j.length > 6) {
            console.log(`გრძელი სახელი: ${j} (${i})`);
        }
    }
}