// 1
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

// 2
function getMiddle(s) {
    let a = s.length
    let b = a / 2
    if(a % 2 == 0){
        return s.slice(b-1,b+1)
    }else{
        return s.slice(b, b+1)
    }
}

// 3
function warnTheSheep(queue) {
    let a = queue.indexOf('wolf')
    let b = queue.length - a - 1
    if(a == queue.length - 1){
        return "Pls go away and stop eating my sheep"
    }else{
        return `Oi! Sheep number ${b}! You are about to be eaten by a wolf!`
    }
}

// 4
function replace(s) {
    let a = 'aeiouAEIOU'
    let b = ''
    for(let i of s){
        if(a.includes(i)){
        b+='!'
        }else{
        b+=i
        }
    }
    return b
}

// 5
function stringy(size) {
    let a = []
    for(let i = 0; i < size; i++){
        if(i % 2 == 0){
        a+='1'
        }else{
        a+='0'
        }
    }
    return a
}