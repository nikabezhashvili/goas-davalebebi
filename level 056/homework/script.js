// 1
let colors = ["წითელი", "მწვანე"]
colors.push('ლურჯი')
console.log(colors);


// 2
let playlist = ['HA CTOPOHKE', 'borderline', 'Бошка']
playlist.pop()
console.log(playlist);


// 3
let numbers = [10, 20, 30]
numbers.push(40,50)
console.log(numbers.length);

// 4
let cities = ["თბილისი", "ბათუმი", "ქუთაისი"]
cities.pop()
console.log(cities);

// 5
let animal1 = prompt('enter animal(1)')
let animal2 = prompt('enter animal(2)')
let animals = []
animals.push(animal1,animal2)
console.log(animals);



// 6
let stack = ["A", "B", "C"]
let reversed = []
reversed.push(stack.pop())
console.log(reversed);


// 7
let team = ['ნიკა', 'გიო', 'მათე', 'დავით']
if (team.length > 3) {
    team.pop()
} else {
    team.push('გია')
}
console.log(team);

// 8
let transactions = [100, -50, 200]
let user_transactions = Number(prompt('შემოიტანეთ თანხა'))
if (user_transactions > 0) {
    transactions.push(user_transactions)
} else if(user_transactions < 0) {
    transactions.pop()
}
console.log(transactions);

// 9
let warehouse = ["მაგიდა", "სკამი"]
warehouse.push('კარადა')
let isFull = undefined
if (warehouse.length === 3) {
    isFull = true
    warehouse.pop()
}
console.log(warehouse,isFull);

