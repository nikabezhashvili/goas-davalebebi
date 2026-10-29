// 2
const temperatures = [22, 18, 35, 12, 28]
let [a,b,c,d,e] = temperatures

// 3
const laptop = {
    brand: "ASUS",
    ram: 16,
    storage: 512,
    isGaming: true
}
let{brand,storage,isGaming} = laptop

// 4
let racers = ["Lewis", "Max", "Lando", "Charles", "George", "Oscar"]
const [gold, silver, ...other_racers] = racers;

// 5
const names = [true, false, true, true]
const nums = [43.2, 98, 43, 313, 11]
const mixed_arr = [...names,...nums]