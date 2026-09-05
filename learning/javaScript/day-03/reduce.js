const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => sum + number, 0);
// console.log(total);

// sum → accumulator
// number → current element
// 0 → initial value
// final sum → returned result

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Keyboard", price: 5000 },
];

const finalPrice = products.reduce((total, product) => {
  if (product.price < 30000) {
    return total + product.price;
  }
  return total;
}, 0);
// console.log(finalPrice);

const minPrice = products.reduce((min, product) => {
  if (product.price < min) {
    return product.price;
  }
  return min;
}, Infinity);
// console.log(minPrice);

// const newProduct = [...products, {name: "Laptop", price: 45000}];
// console.log(newProduct);
// console.log(products);

const item = {
  name: "Laptop",
  price: 50000,
};
const newItem = {
  ...item,
  price: 45000,
};
// console.log(item);
// console.log(newItem);

const user = {
  name: "John",
  age: 25,
  city: "Delhi",
};

const updatedUser = {
  ...user,
  age: 26,
};

// console.log(user);
// console.log(updatedUser);

const updatedProducts = products.map((product) => {
  if (product.name === "Phone") {
    return {
      ...product,
      price: 20000,
    };
  }
  return product;
});
// console.log(products);
// console.log(updatedProducts);

const updatedPrice = products.map((product) => {
  return {
    ...product,
    price: product.price + product.price * 0.1,
  };
});
// console.log(updatedPrice);

const user1 = {
  name: "John",
};

const anotherUser = user1;
anotherUser.name = "Mike";

// console.log(user1.name);
// console.log(anotherUser.name);

// Assignment creates another reference to the same object, while object spread creates a new object with copied properties.

const items = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Keyboard", price: 5000 },
  { name: "Mouse", price: 2000 },
];

const budgetItems = items
  .filter((item) => item.price < 30000)
  .map((item) => ({
    ...item,
    price: item.price + item.price * 0.1,
  }));

console.log(items);
console.log(budgetItems);
