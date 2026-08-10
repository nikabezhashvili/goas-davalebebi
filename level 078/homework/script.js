// 1
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

// 2
function squareDigits(num){
    num = String(num)
    let a = ''
    for(let i = 0; i < num.length; i++){
        a+= String(Number(num[i]**2))
    }
    return Number(a)
}

// 3
function accum(s) {
    let a = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
        a.push(c);
    }
    return a.join("-");
}

// 4
function getMiddle(s) {
    let a = s.length
    let b = a / 2
    if(a % 2 == 0){
        return s.slice(b-1,b+1)
    }else{
        return s.slice(b, b+1)
    }
}

// 5
function removeSmallest(a) {
    if (a.length === 0) return [];
    let min = Math.min(...a);
    let idx = a.indexOf(min);
    let b = a.slice();
    b.splice(idx, 1);

    return b;
}