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
