// 2
// class არის ერთგვარი შაბლონი რომლის მიხედვითაც შეგიძლია ბევრი ერთნაირი ობიექტის შექმნა

// 3
class task3{
    constructor(name, surname, age){
        this._name = name
        this.surname = surname
        this.age = age
    }

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
// --------
    get surname() {
        return this._surname
    }
    set surname(value) {
        this._surname = value
    }
// --------
    get age() {
        return this._age
    }
    set age(value) {
        this._age = value
    }
}


// 4

class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} ხმას გამოსცემს`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    bark() {
        console.log(`${this.name} barks!`)
    }
}