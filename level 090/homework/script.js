// // 1
// function checkNumber(number) {
    // return new Promise((resolve, reject) => {
    //     if (number > 0) {
    //         resolve("Positive");
    //     } else if (number < 0) {
    //         reject("Negative");
    //     } else {
    //         resolve("Zero");
    //     }
    // });
// }

// checkNumber(10).then((res) => {
//         console.log(res);
//     }).catch((er) => {
//         console.log(er);
//     });


// // 2
// let number = prompt("შეიყვანე რიცხვი:");
// function checkCode(number) {
//     return new Promise((resolve, reject) => {
//         if (number == 1234) {
//             resolve("სწორი რიცხვია!");
//         } else {
//             reject("არასწორი რიცხვია!");
//         }
//     });
// }

// checkCode(number)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((er) => {
//         console.log(er);
//     });

// 1 
const task1 = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello!");
    }, 2000);
});
task1().then(res =>{
    console.log(res);
})

// 2
const checkNumber = number => {
    return new Promise((res, rej) => {
        if (number > 0) {
            res("Positive");
        } else if (number < 0) {
            rej("Negative");
        } else {
            res("Zero");
        }
    });
}

// 3
const getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Data loaded!")
        }, 3000);
    })
}

getData().then(res =>{
    console.log(res);
    
})
