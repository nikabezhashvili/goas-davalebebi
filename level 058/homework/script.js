// 1
let pacient_count = ["პაციენტი 1", "პაციენტი 2"]
pacient_count.unshift("კრიტიკული პაციენტი")
pacient_count.shift()
console.log(pacient_count);


// 2
let classA = ["ანი", "გიორგი"]
let classB = ["ლუკა", "ნინო"]
let allStudents = classA.concat(classB)
console.log(allStudents);


// 3
let arr = [1, 2, [3, 4,]]
arr = arr.flat(Infinity)
console.log(arr);


// 4
let IT = ["javascript", "programming", "web"]
IT = IT.join('-')
console.log(IT);


// 5
let names = ["ნიკა", "ლაშა", "სანდრო", "გიორგი", "დათო"]
let best3 = names.slice(0,3)
console.log(best3);


// 6

let guest = ["ანი", "ლუკა", "საბა"]
if(guest.includes('ლუკა')){
    console.log("მოგესალმებით!");
}


// 7
let fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"]
let index = fruits.indexOf("ატამი")
console.log(index);


// 8
let ABCD = ["A", "B", "C", "A", "D"]
console.log(ABCD.lastIndexOf('A'));


// 9

let arr1 = ["პირველი", "მეორე", "მეოთხე"]
let arr2 = arr1.slice(0,2)
let arr3 = arr1.slice(2,3)
let arr4 = ['მესამე']
let arr5 = arr2.concat(arr4,arr3)
console.log(arr5);


// 10
let list = [["აგენტი 001"], ["აგენტი 007"], ["აგენტი 005"]]
let list1 = list.flat(Infinity)
let list2 = list1.includes("აგენტი 007")
if (list2) {
    console.log(list1.indexOf("აგენტი 007"));
}