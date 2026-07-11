// 1
let names = ['გიორგი', 'ნიკა', 'სალომე']
names.forEach(i => {
    console.log(`მომხმარებელი: [${i}]`);
});

// 2
let salary = [800, 1200, 1500, 2000]
let newSalary = salary.map(i => i+=150)
console.log(newSalary);

// 3
let ages = [14, 22, 17, 18, 30, 15]
let filter_ages = ages.filter(i => i>=18)
console.log(filter_ages);

// 4
let colors = ['Blue', 'Green', 'Red', 'Yellow']
console.log(colors.indexOf('Red'));

// 5
let monet = [10, 5, 20, 2, 5]
let sum = monet.reduce((a, b) => {
    return a + b
},50)
console.log(sum);

// 6
let balans = [120, -5, 450, 0, 89]
let minus_balans = balans.some(i => i< 0)
console.log(minus_balans);

// 7
let arr = [8, 12, 4, 6, 9]
let new_arr = arr.every(i => i>=6)
console.log(new_arr);

// 8
let prices = [20, 150, 40, 300, 80, 500]
let vip = prices.filter(i => i > 100)
let cashBack = vip.map(i => i *0.9)
console.log(cashBack);

// 9
let dishes = ['ხაჭაპური', 'ლობიანი', 'ხინკალი', 'მწვადი']
let dishes1 = dishes.filter(i => i !== 'ლობიანი')
let sortedDishes = dishes1.sort()
let bigText = sortedDishes.join('-',' ')
console.log(bigText);

// 10
let balanses = [-10, 50, -25, 100, 0, -5]
let sumOfBalanses = balanses.map(i =>{
    if (i<=0) {
        return i = 0
    }else{
        return i
    }
}).filter(i => i>0).reduce((a,b) => {
    return a + b
}, 0)
console.log(sumOfBalanses);
