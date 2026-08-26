import products from "./data/products";

function App() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>₹{product.price}</p>
          <p>{product.category}</p>
          <p>{product.brand}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

// We use map() because React needs to render something for each item in the array, and map() returns a new array containing those rendered elements.
// forEach() only performs an operation on each item and doesn't return a new array.

// const inStockproducts = products
//   .filter((product) => product.inStock)
//   .map((product) => product.name);
// console.log(inStockproducts);

// Can you chain filter() and map()? If yes, why?
// Yes, we can chain filter() and map() because filter() returns a new array.
// That returned array can then be passed to map(), which transforms each remaining element.
