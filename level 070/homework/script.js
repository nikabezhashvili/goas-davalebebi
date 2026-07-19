// 1
let laptop = {
    brand: "Apple",
    model: "MacBook",
    ram: 16,
}
console.log(Object.keys(laptop));


// 2
let player = {
    name: 'Leo',
    score: 99,
    level: 5,
}
console.log(Object.values(player));


// 3
let country = {
    name: 'Georgia',
    capital: 'Tbilisi'
}
console.log(Object.entries(country));


// 4
let arr = [['role', 'admin'], ['status', 'active']]
console.log(Object.fromEntries(arr));


// 5
let part1 = {
    a: 1
}
let part2 = {
    b: 2
}
let part3 = {
    c: 3
}
console.log(Object.assign({},part1,part2,part3));


// 6
let secureData = {
    pin: 1122
}
Object.freeze(secureData)
secureData.pin = 5566
console.log(Object.isFrozen(secureData));


// 7
let profile = {
    username: 'davit',
    likes: 10,
}
Object.seal(profile)
profile.likes = 11
profile.age = 20
console.log(Object.isSealed(profile));


// 8
let product = {
    id: 1,
    title: 'phone',
}
console.log(Object.hasOwn(product, 'price'));
console.log(Object.hasOwn(product, 'title'));


// 9
settings = { 
    theme: "dark",
}
Object.preventExtensions(settings)
delete settings.theme
Object.isExtensible(settings)


// 10
let val1 = NaN
let val2 = NaN
console.log(val1 === val2);
Object.is(val1,val2)