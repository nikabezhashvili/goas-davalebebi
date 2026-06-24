// 1
let arr = [1,2,3,4,5,6,7,8,9,10]
const task1 = () =>{
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            even+=arr[i]
        }
    }
    return even
}
console.log(task1());


// 2
let arr1 = [5,10,15,20,25,30,35,40]
let max = arr1[0]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i]
    }
}
console.log(max);


// 3
let arr2 = [5,10,15,20,5,30,35,40,45,5]
const task3 = (arr2,find) =>{
    let count = 0
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === find) {
            count+=1
        }
        
    }
    return count
}
console.log(task3(arr2,5));


// 4
let arr3 = [2,4,6,8,10]
let reversedArr3 = []
for (let i = arr3.length - 1; i >= 0; i--) {
    reversedArr3.push(arr3[i])
}
console.log(reversedArr3);


// 5
let arr4 = [3,6,9,12,15,18,21]
const task5 = () => {
    let arr4Mult2 = []
    for (let i = 0; i < arr4.length; i++) {
        arr4Mult2.push(arr4[i]*2)
    }
    return arr4Mult2
}
console.log(task5());


// 6
let arr5 = [-3, 5, 0, -1, 12, -8, 4]
let positiveCount = 0
let negativeCount = 0
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > 0) {
        positiveCount += 1
    }else if(arr5[i] < 0){
        negativeCount +=1
    }else{
        continue
    }
}
console.log(positiveCount);
console.log(negativeCount);


// 7
let arr6 = ["ვაშლი", "მსხალი", "ატამი", "ქლიავი"]
const task7 = (find1) =>{
    for (let i = 0; i < arr6.length; i++) {
        if (arr6[i] === find1) {
            return  i
        }
    }
}
console.log(task7('ქლიავი'));

// 8
let arr7 = [1, 2, 3]
let arr8 = [2, 5, 25]
let res = []
for (let i = 0; i < arr7.length; i++) {
    res.push(arr7[i] + arr8[i])
}
console.log(res);


// 9
let arr9 = [5,10,15,20,25,30,40,45,50,60]
let mid = 0
let arr10 = []
for (let i = 0; i < arr9.length; i++) {
    mid += arr9[i]
}
mid = mid / arr9.length
for (let a = 0; a < arr9.length; a++) {
    if (arr9[a] > mid) {
        arr10.push(arr9[a])
    }
}
console.log(arr10);


// 10
let arr11 = ["it", "javascript", "code", "programming"]
const task10 = () => {
    for (let i = 0; i < arr11.length; i++) {
        if (arr11[i].length < 5) {
            console.log("მოკლე ტექსტი");
        } else {
            console.log("გრძელი ტექსტი");
        }
        
    }
}
task10()
