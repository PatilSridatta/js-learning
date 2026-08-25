import product from "./data/products";

function App() {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>₹{product.price}</p>
            <p>{product.category}</p>
            <p>{product.brand}</p>
        </div>
    );
}

export default App;