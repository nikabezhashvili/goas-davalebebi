// 1
let names = ['ანი', 'ლუკა', 'ნინო']
names.forEach(i => {
    console.log(`გამარჯობა, ${i}!`);
});


// 2
let nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach(i => {
    if (i % 2 === 0) {
        console.log(`${i} არის ლუწი`);
    } else {
        console.log(`${i} არის კენტია`);
    }
});

// 3
let nums1 = [-5, 10, -2, 8, 0, -1]
const positiveNumbers = []
nums1.forEach(i => {
    if (i>0) {
        positiveNumbers.push(i)
    }
});


// 4
let films = ['Inception', 'Interstellar', 'The Matrix']
films.forEach((i,index) => {
    console.log(`${index +1 }. ${i}`);
});

// 5
let fruits = ['ვაშლი', 'მსხალი', 'ატამი']
let len = 0
fruits.forEach(i => {
    len += i.length
});

// 6
const userNames = ['გიორგი', 'მარიამი']
const userAges = [16, 17]
userNames.forEach((i,index) => {
    console.log(`${i} არის ${userAges[index]} წლის`);
});


// 7
let prices = [100, 250, 400, 50];
prices.forEach((price, index, arr) => {
  arr[index] = price * 0.8;
});


// 8
let scores = [41,81,36,67,27,93]
const passedScores = []
scores.forEach(i => {
    if (i>51) {
        passedScores.push(i)
    }
});

// 9
let dishes = ['პიცა მარგარიტა', 'ცეზარი სალათი', 'პიცა პეპერონი', 'ბერძნული სალათი']
dishes.forEach(i => {
    if (i.includes('პიცა')) {
        console.log(i);
        
    }
});

// 10
let nums2 = [10,20,30,40,50,60]
let maxnum = 0
nums2.forEach(i => {
    if (i > maxnum) {
        maxnum = i
    }
});
console.log(maxnum);

// 12-14 done