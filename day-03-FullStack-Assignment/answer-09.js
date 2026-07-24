const products = [
    { name: "Laptop", price: 800, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true }
];


// 1. Find the first product priced above $400

const expensiveProduct = products.find(product => product.price > 400);

console.log(expensiveProduct);

// Output: { name: "Laptop", price: 800, inStock: true }


// 2. Check if any product is out of stock

const hasOutOfStockProduct = products.some(product => !product.inStock);

console.log(hasOutOfStockProduct);

// Output: true


// 3. Check if all product names have more than 3 characters

const allNamesLongerThanThree = products.every(product => product.name.length > 3);

console.log(allNamesLongerThanThree);

// Output: true
