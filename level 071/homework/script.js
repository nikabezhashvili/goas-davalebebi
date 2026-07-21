// 1
var uniqueInOrder=function(b){
    let a = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i] !== b[i - 1]) {
        a.push(b[i]);
        }
    }
    return a;  
}

// 2
function accum(s) {
    let a = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
        a.push(c);
    }
    return a.join("-");
}

// 3
function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) !== i){
        return false
        }
    }
    return true
}

// 4
function highAndLow(numbers){
    let a = numbers.split(' ')
    let b = []
    for(let i = 0; i < a.length; i++){
        b.push(Number(a[i]))
    }
    return `${Math.max(...b)} ${Math.min(...b)}`
}

// 5

function spinWords(string){
    let a = string.split(' ')
    let b = []
    for(let i = 0; i < a.length; i++){
        if(a[i].length >=5){
        b.push(a[i].split('').reverse().join(''))
        }else{
        b.push(a[i])
        }
    }
    return b.join(' ')
}