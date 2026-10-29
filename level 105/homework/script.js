// 1
let money = 15
const task1 = new Promise((resolve, reject) => {
    if (money >= 20) {
        resolve("ბილეთი ნაყიდია!")
    }else{
        reject("თანხა არ გეყოფა")
    }
})
task1.then(res => console.log(res)).catch(err => console.log(err))

// 2
const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const doneHomework = true
        if (doneHomework) {
            resolve("გაკვეთილები მომზადებულია, შეგიძლია ითამაშო!")
        } else {
            reject("ჯერ დავალებები უნდა დაწერო")
        }
    }, 2000);
})

task2.then(res => console.log(res)).catch(err => console.log(err));

// 3
const checkVerify = new Promise((resolve, reject) => {
    const verifyStatus = false
    if (verifyStatus) {
        resolve("You are verified")
    } else {
        reject("You are a child")
    }
})
checkVerify.then(res => console.log(res)).catch(err => console.log(err)).finally(()=> 'ნახვამდის')

// 4
console.log('A')
setTimeout(() => {console.log('B')}, 1000);
setTimeout(() => {console.log('C')}, 0);
console.log('D');

// 5 done