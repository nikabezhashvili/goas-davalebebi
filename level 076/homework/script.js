// 1
function getMiddle(s) {
    let a = s.length
    let b = a / 2
    if(a % 2 == 0){
        return s.slice(b-1,b+1)
    }else{
        return s.slice(b, b+1)
    }
}

// 2
function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
            return arr[0];
        }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
}


// 3
function createPhoneNumber(n){
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}

// 4
function alphabetWar(fight){
    let lsf = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    };
    let rsf = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    };
    
    let lsScore = 0;
    let rsScore = 0;
    
    for(let i = 0; i < fight.length; i++){
        if(lsf[fight[i]]) {
        lsScore += lsf[fight[i]];
        }
        if(rsf[fight[i]]) {
        rsScore += rsf[fight[i]];
        }
    }
    
    if (lsScore > rsScore){
        return "Left side wins!";
    }
    if (lsScore < rsScore){
        return "Right side wins!";
    }
    return "Let's fight again!";
}


// 5
function towerBuilder(f) {
    let a = [];
    let b = f * 2 - 1;
    for (let i = 0; i < f; i++) {
        let s = "";
        let sp = "";
        for (let j = 0; j < 2 * i + 1; j++) {
        s += "*";
        }
        for (let j = 0; j < (b - (2 * i + 1)) / 2; j++) {
        sp += " ";
        }
        a.push(sp + s + sp);
    }
    return a;
}