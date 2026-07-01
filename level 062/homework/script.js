// 1
function arrayDiff(a, b) {
    let c = []
    for(let i = 0; i < a.length; i++){
        if (!b.includes(a[i])){
        c.push(a[i])
        }
    }
    return c
}

// 2
// ვერ გავიგე როგორ გავაკეთო

// 3
var number=function(array){
    let a = []
    for (let i in array) {
        a.push(`${Number(i) + 1}: ${array[i]}`)
    }
    return a
}

// 4
function findOdd(arr) {
    let a = 0
    for(let i = 0; i < arr.length; i++){
        a^=arr[i]
    }
    return a
}

// 5
function solution(st) {
    let a = ''
    for(let i of st){
        if(i >= 'A' && i<='Z'){
        a+= ' '
        }
        a += i
    }
    return a
}



