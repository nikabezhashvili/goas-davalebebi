const task1 = setInterval(() => {
    console.log('hello world');
}, 1000);

clearInterval(task1)

let number = 0;
const task2 = setInterval(() => {
    if (number === 5) {
        clearInterval(task2);
    }else{
        console.log(number);
        number++;
    }
}, 1000);