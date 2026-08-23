class dog{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    } 
}
const dogInfo = new Dog("ჯეკა", 3);

console.log(dogInfo.name);
console.log(dogInfo.age);  

class Parent {
    constructor(key1, value1, key2, value2) {
        this.key1 = value1;
        this.key2 = value2;
    }
}

class ChildOne extends Parent {
    constructor(key1, value1, key2, value2, new1, new2) {
        super(key1, value1, key2, value2);
        this.new1 = new1;
        this.new2 = new2;
    }
}
class ChildTwo extends Parent {
    constructor(key1, value1, key2, value2, new3, new4) {
        super(key1, value1, key2, value2);
        this.new3 = new3;
        this.new4 = new4;
    }
}