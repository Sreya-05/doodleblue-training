const products= [
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500},
    {name: "Keyboard", price: 1500},
    {name: "Monitor", price: 12000},
    {name: "Headphone", price: 2000}
];

//filter products with price greater than 1000
const d=(products.filter(product=>product.price>=1000));
console.log(d);
