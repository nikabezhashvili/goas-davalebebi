/* 1)
Set არის მონაცემთა ტიპი, რომელიც ინახავს მხოლოდ უნიკალურ მნიშვნელობებს
Map არის ობიექტის მსგავსი სტრუქტურა რომელიც ინახავს მონაცემებს key-ით და  value-ით
*/


/* 2
Map–სა და Set-ს შორის: Map-ი ინახავს მონაცემებს მისი სახელით (key) და მისი მნიშვნელობით (Value), Set- ინახავს მხოლოდ უნიკალურ მნიშვნელობებს
განსხვავება Map–სა და ობიექტებს შორის: ორივე key-value მონაცემებს ინახავს, მაგრამ Map უფრო მოქნილა
*/

// 3
arr = ["ელექტრონიკა", "ტანსაცმელი", "ელექტრონიკა", "წიგნები", "ფეხსაცმელი", "წიგნები", "სათამაშოები"]
newArr = [...new Set(arr)]

console.log(newArr);

// 4
const newMap = new Map
newMap.set('name1','nika')
newMap.set('name2','daviti')
newMap.set('name3','gio')

console.log(newMap.has('ნინო'));
newMap.delete('name1')
const name = newMap.get('name2')
console.log(name);

// 5
const newMap1 = new Map
newMap1.set('username1','Ghost')
newMap1.set('username2','Shadow')
newMap1.set('username3','ProPlayer')

newMap1.has("john_doe")
newMap1.delete('username3')
const username = newMap1.get('username2')
console.log(username);
