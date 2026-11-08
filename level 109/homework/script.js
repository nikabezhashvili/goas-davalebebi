// 1
class animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log(`რავი პირობაში არ წერია არაფერი პირობაში ამაზე`);
    }
}

class Dog extends animal {
    constructor(name,breed) {
        super(name)
        this.breed = breed
    }
    makeSound() {
    console.log(`${this.name} ყეფს!`);
    }
}


// 2
class MathUtils {
    static constructor(radius) {
        Math.PI * radius ** 2
    }
}

// 3
class Employee {
    constructor(name,salary) {
        this.name = name
        this.salary = salary
    }
}

class Manager extends Employee {
    constructor(name,salary,departament) {
        super(name,salary)
        this.departament = departament
    }
}

// 4
class User {
    constructor(username,score) {
        this.username = username
        this.score = score
    }
    static getWinner(user1, user2){
        if (user1.score > user2.score) {
            return user1.name
        } else {
            return user2.name
        }
    }
}
