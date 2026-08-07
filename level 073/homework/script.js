//   1
function Car(brand,model,year) {
    this.brand = brand
    this.model = model
    this.year = year
    this.getAge = function(){
        return 2026 - this.year;
    }
}

//  2
function Book(title,author,isRead) {
    this.title = title
    this.author = author
    this.isRead = isRead
    this.toggleRead = function(){
        this.isRead = !this.isRead;
    }
}


//  4
function createCharacter(name) {
    this.name = name
    let hp = 100
    this.takeDamage = function(amount){
        if ((hp - this.amount) > 0) {
            return 0
        }
    }
    this.heal = function(amount){
        if ((hp + this.amount)>100) {
            return 100
        }
    }
}

// 5
let calculator = {
    a: 0,
    b: 0,
    setValues: function(x, y) {
        this.a = x;
        this.b = y;
    },
    add: function() {
        return this.a + this.b;
    },
    multiply: function() {
        return this.a * this.b;
    }
};


//  6
function ShoppingCart() {
    let items = [];
    this.addItem = function(name, price) {
        this.items.push({ name: name, price: price });
    };

    this.getTotal = function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    }
}

//  7
function Task(title,duration) {
    this.title = title
    this.duration = duration
    this.convertToHours = function(){
        return `${title} გრძელდება ${duration}საათი`
    }
}


//  8
function createUserSession(username,password) {
    this.username = username
    this.password = password
    this.login = function(enteredUser,enteredPass){
        return enteredPass === enteredUser
    }
}

// 9
function createScoreTracker(score = 0) {
    addPoint = function(){
        score++
    }
    reset = function(){
        score = 0
    }
    getScore = function(){
        return score
    }
}

// 10

let currencyConverter = {
    rate: 2.8, 
    convertToGEL: function(usd){
        let gel = usd * this.rate;
        return `${usd} USd = ${gel} Gel`
    }
}