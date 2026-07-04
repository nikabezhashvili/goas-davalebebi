let prices = [10, 20, 30, 40, 50];
let total = 0;

prices.forEach((price) => {
    let newPrice = price * 1.18;
    console.log(newPrice);
    total += newPrice;
});

console.log("ჯამური ღირებულება:", total);


