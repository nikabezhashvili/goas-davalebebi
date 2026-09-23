// 1
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("Positive");
        } else if (number < 0) {
            reject("Negative");
        } else {
            resolve("Zero");
        }
    });
}

checkNumber(10).then((res) => {
        console.log(res);
    }).catch((er) => {
        console.log(er);
    });


// 2
let number = prompt("შეიყვანე რიცხვი:");
function checkCode(number) {
    return new Promise((resolve, reject) => {
        if (number == 1234) {
            resolve("სწორი რიცხვია!");
        } else {
            reject("არასწორი რიცხვია!");
        }
    });
}

checkCode(number)
    .then((res) => {
        console.log(res);
    })
    .catch((er) => {
        console.log(er);
    });