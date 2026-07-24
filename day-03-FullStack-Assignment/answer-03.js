const prices = [100, 200, 300, 400];

const discountedPrices = prices.map((price, index) => {
    if (index % 2 === 0) {
        return price * 0.90;
    } else {
        return price * 0.95;
    }
});

console.log(discountedPrices);
// Output: [90, 190, 270, 380]