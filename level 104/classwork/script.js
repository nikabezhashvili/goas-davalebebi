// 1
const salary = [1500, 2000, 9800, 12300, 5000]
// 1.1
const [el1,el2,el3,el4,el5] = salary
// 1.2 
console.log(el1);
console.log(el2);
console.log(el3);
console.log(el4);
console.log(el5);

// 2
const group_info = {
    name: "Group 63",
    studentsCount: 10,
    isActive: true,
    learning: "JS Intermidiate",
    speed: 2
}
// 2.1
const {name,studentsCount,isActive,learning,speed} = group_info

// 2.2
console.log(name);
console.log(isActive);
console.log(speed);

// 3
const names = ['Davit', 'Jan', 'Gio', 'Lado', 'Guka']
const nums = [1, 98, 102, 34, 87]
// 3.1
const mixed_arr = [...names,...nums]
console.log(mixed_arr);

// 4
const cars = ['BMW M5 F90', 'Mersedes Benz G65 AMG', 'Mazda RX7', 'Toyota Prius'] 
// 4.1

const [elem1 ,elem2, ...other_cars] = cars
