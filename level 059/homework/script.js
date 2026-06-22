// # Level 59:

// 1
const task1 = () =>{
    let list1 = []
    let num = Number(prompt('enter number'))
    for (let i = 0 ; i < num ; i ++){
        if (i % 2 == 0){
            list1.push(i)
        } 
        else{
            continue
        }
    }
}
console.log(list1);



// 2
const task2 = name =>{
    if (students.includes(name)) {
        console.log('სტუდენტი ნაპოვნია');
    } else {
        console.log("სტუდენტი არ არის სიაში");
    }
}


// 3
let nums = [10, -5, 20, -3, 30, -12];
let arr = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
        arr.push(nums[i]); 
    }
}
console.log(arr); 

// 4
let coast = 0
let product_coast = [5, 15, 20, -10, 3, 40, -8]
const task4 = () => {
    for (let i = 0; i < product_coast.length ; i++){
        if (product_coast[i] < 0) {
            continue
        } else {
            coast += product_coast[i]
        }
    }
}
console.log(coast);



// 5
words = ["მე", "ვსწავლობ", "javascript-ს"]
sec = ''
const task5 = ()=>{
    for (let i = 0; i< words.length ; i++){
        sec = words.join(' ')
        if (sec.length > 10 ) {
            console.log(sec);
        } else {
            continue
        }
    }
}

// 6
let sitys = ["ბათუმი", "თბილისი", "ქუთაისი"]
const task6 = (sity) => {
    for (let i = 0; i < sitys.length; i++) {
        if (sitys[i].includes(sity)) {
            console.log(sitys.indexOf(sity));
        }else{
            continue
        }
        
    }
}



// 7
let listA = [1, 2, 3]
let listB = []
let result

if (listA.length > listB.length) {
    result = listA.concat(listB)
} else {
    result = listB.concat(listA)
}

// 8
let grade = ["A", "B", "C", "D", "E"]
for (let i = 0; i <3; i++){
    grade.pop()
}
console.log(grade);


// 9
let arr1 = [10,20,30,40,2,60,132,24,73,38,29]
let arr2 = []
for (let i = 0; i < arr1.length; i++) {
    if (15> arr1[i] && arr1[i]<40) {
        arr2.unshift(arr1[i])
    } else {
        continue
    }
}
console.log(arr2);

// 10
let fruits = ["ვაშლი", "ბანანი", "ატამი"]
const task10 = ()=>{
    if (fruits[1] == 'ბანანი') {
        fruits[1] = 'მსხალი'
    }else{
        
    }
}
task10()
console.log(fruits);
