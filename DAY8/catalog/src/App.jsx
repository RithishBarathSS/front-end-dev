import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "₹55,000",
      image: "https://picsum.photos/id/180/300/200",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "₹25,000",
      image: "https://picsum.photos/id/160/300/200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹3,000",
      image: "https://picsum.photos/id/1080/300/200",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "₹4,500",
      image: "https://picsum.photos/id/26/300/200",
    },
    {
      id: 5,
      name: "Camera",
      price: "₹40,000",
      image: "https://picsum.photos/id/250/300/200",
    },
    {
      id: 6,
      name: "Keyboard",
      price: "₹1,500",
      image: "https://picsum.photos/id/20/300/200",
    },
  ];

  return (
    <div className="app">
      <h1>🛍️ Product Catalog</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;