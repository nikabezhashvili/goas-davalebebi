// 1
function findAverage(a) {
    if(a.length == 0){
        return 0
    }
    b = 0
    for(let i of a){
        b +=i
    }
    return b / a.length
}

// 2
function wordsToMarks(s){
    let a = {
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25,
        z: 26
    };

    let b = 0;
    for (let i of s) {
        b += a[i];
    }
    return b;
}

// 3
function removeSmallest(a) {
    if (a.length === 0) return [];
    let min = Math.min(...a);
    let idx = a.indexOf(min);
    let b = a.slice();
    b.splice(idx, 1);
    return b;
}

// 4
function duplicateEncode(word){
    let a = word.toLowerCase()
    let b = ''
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
        b+='('
        } else {
        b+=')'
    }
    }
    return b
}


// 5

function createPhoneNumber(n){
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}