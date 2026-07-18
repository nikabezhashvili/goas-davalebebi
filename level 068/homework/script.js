// 1
let book = {
    title: "JavaScript 101",
    author: "John Doe",
    pages: 250,
}
console.log(book);



// 2
const user = { 
    name: "გიორგი", 
    age: 25,
};
console.log(`მომხმარებლის სახელია ${user.name} და არის ${user.age} წლის`);


// 3
const lookupKey = "genre";
const movie = { 
    title: "Inception", 
    genre: "Sci-Fi" 
};
console.log(movie[lookupKey]);

// 4
const car = { 
    brand: "BMW" 
}
car.brand = 'Audi'
car.year = 2022
console.log(car);

// 5
const student = { 
    name: "ლუკა",
    math: 90,
    physics: 85,
};
for (let i in student) {
    if (i !== 'name') {
        console.log(`[${i}]: [${student[i]}]`);
    }
}

// 6
const laptop = { 
    model: "MacBook",
    ram: 16,
};
console.log(laptop.hasOwnProperty('ram'));
console.log(laptop.hasOwnProperty('price'));


// 7
const personal = { 
    firstName: "ნინო" 
};
const contact = { 
    email: "nino@gmail.com"
};

const fullProfile = Object.assign({}, personal,contact)

// 8
const stock = { 
    apples: 10, 
    bananas: 0, 
    oranges: 5 
};
for (let i in stock) {
    if(stock.hasOwnProperty(i) &&stock[i]>0){
        console.log(i);
    }
}

// 9
const defaultSettings = { 
    theme: "light", 
    volume: 50 
};

const newSettings = { 
    theme: "dark" 
};
Object.assign(defaultSettings, newSettings);

console.log(defaultSettings);

// 10
const data = {
    
}
const keyName = "status"
const keyValue = "success"
data[keyName] = keyValue;

console.log(data);