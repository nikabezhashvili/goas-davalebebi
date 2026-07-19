// 1
let greeter = {
    name: "გიორგი",
    sayHello: function() {
    console.log("გამარჯობა, " + this.name + "!");
    }
}


// 2
let calculator = {
    add: (a,b) => {
        return a+b
    },
    multiply: (a,b) => {
        return a*b
    },
}


// 3
function User(name, age) {
    this.name = name;
    this.age = age;
}
const user1 = new User("გიორგი", 16);
const user2 = new User("ნიკა", 15);

// 4
function Car(brand, speed){
    this.brand = brand
    this.speed = speed
    this.drive = function() {
    console.log(this.brand + " მიდის " + this.speed + " კმ/სთ სიჩქარით");
    };
}
const car1 = new Car("Toyota", 120);
const car2 = new Car("BMW", 180);

// 5
let bankAccount = {
    balance: 100,
    deposit: function(amount) {
        this.balance+=amount
    }
}


// 6
let counter = {
    count: 0,
    increment: function() {
        this.count += 1;
    },
    decrement: function() {
        this.count -= 1;
    }
}

// 7
function Product(name, price){
    this.name = name
    this.price = price
    this.getDiscountPrice = function(discountPercent) {
        let discount = (this.price * discountPercent) / 100
        return this.price - discount
    }
}

// 8
let stepCounter = {
    steps: 0,
    walk: function(){
        this.steps ++
        return this
    },
    print: function() {
        console.log("ნაბიჯები:", this.steps)
        return this
    }
}

// 9
function box(size) {
    this.size = size
}
const box1 = new box(10);
const box2 = new box(10);
console.log(box1 === box2);
console.log('შედეგად false გვაქვს რადგან ჩვენ შევადარეთ სხვა და სხვა ობიექტი და არა ამ ბიექტის მნიშვნელობა');


// 10

const actions = { 
    greet: () => "Hi!", 
    wave: () => "*waves*" 
};
const chosenAction = "greet";
console.log(actions[chosenAction]());
