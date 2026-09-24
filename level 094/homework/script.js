// 1
function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) !== i){
        return false
        }
    }
    return true
}

// 2
function highAndLow(numbers){
    let a = numbers.split(' ')
    let b = []
    for(let i = 0; i < a.length; i++){
        b.push(Number(a[i]))
    }
    return `${Math.max(...b)} ${Math.min(...b)}`
}


// 3
function likes(names) {
    if (names.length === 0){
        return "no one likes this"
    }else if (names.length === 1){
        return `${names[0]} likes this`
    }else if (names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    }else if (names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}


// 4
function disemvowel(str) {
    let ar = ['a','e','i','o','u']
    let sen = ''
    for(let i of str){
        if(!ar.includes(i.toLowerCase())){
        sen+=i
        }
    }
    return sen
}

// 5
function solution(number){
    a = 0    
    for (let i = 0; i < number; i++) {
        if(i % 3 == 0 || i % 5 == 0){
        a+=i
        }
    }
    return a
}