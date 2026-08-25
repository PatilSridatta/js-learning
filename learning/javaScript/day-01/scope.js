let storeName = "Mini Store";

function showStore() {
  let product = "Laptop";

  console.log(storeName);
  console.log(product);
}

showStore();
console.log(storeName);
// console.log(product);

// if (true) {
//     let price = 50000;
//     console.log(price);
// }

// console.log(price);

if (true) {
  var price = 50000;

  console.log(price);
}

console.log(price);

// Var is function scoped and let and const are block scoped.
// This means that variables declared with var are accessible outside of the block they are defined in,
// while variables declared with let and const are only accessible within the block they are defined in.

// |                          | `var` | `let` | `const`
// | ------------------------ | ----- | ----- | -------
// | Function scoped          | ✅    | ❌   | ❌
// | Block scoped             | ❌    | ✅   | ✅
// | Can reassign             | ✅    | ✅   | ❌*
// | Can redeclare same scope | ✅    | ❌   | ❌

function test() {
  var priced = 20000;
  console.log(priced); // ✅
}
test();

// console.log(priced); // ❌

const product = "Laptop";
// product = "Mobile"; // ❌
let quantity = 1;

quantity = 2;

console.log(product);
console.log(quantity);

const user = {
  name: "John",
};

user.name = "David";
console.log(user);

function calculateDiscount(price, discount) {
  const finalPrice = price - (price / 100) * discount;
  return finalPrice;
}

console.log(calculateDiscount(1000, 10)); // ✅
// A parameter is a variable defined in the function declaration that receives a value. 
// An argument is the actual value passed to the function when we call it.

// price, discount
//       ↓
//    parameters

// 1000, 10
//       ↓
//    arguments

// finalPrice
//       ↓
// local variable

// function calculateCartTotal(price, quantity) {
//     return  price * quantity;
// }

// console.log(calculateCartTotal(500, 3)); // ✅


// const calculateCart = (price, quantity) => price * quantity; // impilicit return
// Since the arrow function has only one expression, you can use an implicit return

const calculateCart = (price, quantity) => {
  return price * quantity;
};
console.log(calculateCart(500, 3)); // explicit return   


const item = {
  name: "Laptop",
  cost: 50000,
  category: "Electronics"
}

const { name, cost, category } = item; // object destructuring
console.log(name);
console.log(cost);
console.log(category);

const phone = {
    nama: "iPhone",
    value: 80000,
    brand: "Apple",
    inStock: true
};

const {nama : productname, value : productCost, inStock } = phone;
console.log(productname);
console.log(productCost);
console.log(inStock);

// "return" sends a value from a function back to the place where the function was called. 
// The returned value can then be stored in a variable, used in a calculation, or passed to another function.



// An arrow function is a shorter syntax for defining a function. 
// It can use an implicit return when the function contains a single expression. 
// Arrow functions are commonly used in React because they work well with callbacks and event handlers. 
// One important difference is that arrow functions don't have their own this binding.


// Destructuring is a JavaScript feature that allows us to extract values from an object or array and assign them to variables. 
// For example, instead of writing product.name and product.price, we can write const { name, price } = product and use those variables directly.