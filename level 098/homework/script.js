// 1
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let a = mpg * fuelLeft
    return a >= distanceToPump
};

// 2
function sumArray(arr) {
    if (!arr || arr.length < 3) {
        return 0
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] < min){
            min = arr[i]
        }if (arr[i] > max){
            max = arr[i]
        } 
    }

    return sum - min - max;
}

// 3
function doubleChar(str) {
    let a = ''
    for(let i of str){
        a += i
        a += i
    }
    return a
}

// 4
function arrayPlusArray(arr1, arr2) {
    sum1 = 0
    sum2 = 0
    for(let i of arr1){
        sum1 += i
    }
    for(let i of arr2){
        sum2 += i
    }
    return sum1 + sum2
}

// 5
function testEven(n) {
    if(n % 2 === 0){
        return true
    }
    return false
}