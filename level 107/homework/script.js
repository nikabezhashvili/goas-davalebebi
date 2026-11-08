// 1
class Car {
    constructor(brand,speed) {
        this.brand = brand
        this.speed = speed
    }
    drive(){
        console.log(`მანქანა ${this.brand} მოძრაობს ${this.speed} კმ/სთ სიჩქარით`);
    }
}

// 2
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getArea(){
        console.log(this.width * this.height);
    }
}

// 3
class Student {
    constructor(name,score) {
        this.name = name
        this.score = score
    }
    hasPassed(){
        if (this.score > 50) {
            console.log(true);
        }else{
            console.log(false);
        }
    }
}

// 4
class PiggyBank{
    constructor(balance){
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
    }
}
