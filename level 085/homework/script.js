// 1

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

// 2

function findMissingLetter(array) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (array[0] === array[0].toUpperCase()) {
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (alphabet.indexOf(array[i]) + 1 !== alphabet.indexOf(array[i + 1])) {
            return alphabet[alphabet.indexOf(array[i]) + 1];
        }
    }
}

// 3

function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = [];

    for (let i = 0; i < text.length; i++) {
        let letter = text[i].toLowerCase();
        let position = alphabet.indexOf(letter);

        if (position !== -1) {
            result.push(position + 1);
        }
    }

    return result.join(" ");
}

// 4
function high(x){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let words = x.split(" ");
    let max = 0;
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let score = 0;

        for (let j = 0; j < words[i].length; j++) {
            score += alphabet.indexOf(words[i][j]) + 1;
        }

        if (score > max) {
            max = score;
            result = words[i];
        }
    }

    return result;
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