const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },
    {
        id: 2,
        name: "Phone",
        price: 25000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 5000
    },
];


products.forEach((product) => {
    console.log(`${product.name} - ${product.price}`);
})
// console.log(products[0]); // Laptop
// console.log(products[1].name); // Phone
// console.log(products[2]); // Keyboard

// forEach() is used to iterate over each element of an array and perform an operation on each element. 
// It does not create or return a new array.

// | Method      | Main purpose               | Returns new array?   |
// | ----------- | -------------------------- | ------------------   |
// | `forEach()` | Do something for each item | ❌ No               |
// | `map()`     | Transform each item        | ✅ Yes              |
// | `filter()`  | Select matching items      | ✅ Yes              |
// | `find()`    | Find one matching item     | ❌ Returns the item |


const productPrices = products.map((product) =>  product.price);

console.log(productPrices);

// forEach() iterates over each element and performs an operation, but it doesn't return a new array. 
// map() also iterates over each element, but it transforms the elements and returns a new array containing the results.

const affordableProducts  = products.filter((product) => product.price < 30000);
console.log(affordableProducts );


const selectedProduct  = products.find((product) => product.id === 3);
console.log(selectedProduct );

// forEach()
// → Do something with every item
// → returns undefined

// map()
// → Transform every item
// → returns NEW ARRAY

// filter()
// → Keep matching items
// → returns NEW ARRAY

// find()
// → Find FIRST matching item
// → returns ITEM

const productNames = [
    {name : "Laptop"},
    {name : "Phone"},
    {name : "Keyboard"}
];

const names = productNames.map((product) => product.name);
console.log(names);