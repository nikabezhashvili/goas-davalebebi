// // 1
// let temp = [18, 30, 22, 27, 15]
// temp.forEach(i => {
//     if(i>25){
//         console.log(`ცხელა: [${i}]`);
//     }else{
//         console.log(`ნორმალურია: [${i}]`);
//     }
// });


// // 2
// let nums = [-3, 5, -8, 2, 0, -1]
// let negative = 0
// nums.forEach(i => {
//     if (i<0) {
//         negative++
//     }
// });
// console.log(negative);


// // 3
// let cityes = ['თბილისი', 'ბათუმი', 'ქუთაისი']
// cityes.forEach((i,index) => {
//     console.log(`პოზიცია [${index}]: [${i}]`);
// });


// // 4
// let nums1 = [2, 4, 6, 8]
// let newNums  = nums1.map(i => i**2)
// console.log(newNums);


// // 5
// let price =  [10, 50, 100]
// let price_gel = price.map(i => i*2.7)
// console.log(price_gel);

// // 6
// let file = ['photo', 'avatar', 'background']
// let newFile = file.map(i => i +'.png')
// console.log(newFile);


// // 7
// let arr = ['სახლი', 'ხე', 'მზე', 'კომპიუტერი', 'კარი']
// let longworld = arr.filter(i =>i.length > 4)
// console.log(longworld);


// 8
let nums2 = [12, 5, 8, 13, 21, 4]
let oddNums = nums2.filter(i => i % 2 === 1)
console.log(oddNums);


// 9

let productsPrice = [20, 85, 45, 120, 15]
let biudgetProductPrice = productsPrice.filter(i => i<50)
console.log(biudgetProductPrice);


// 10

let emails = ['test@gmail.com', 'invalidgmail.com', 'user@mail.ru', 'hello.com']
let corectEmails = emails.filter(i=> i.includes('@'))
console.log(corectEmails);
