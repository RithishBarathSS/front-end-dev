import './App.css'

const products = [
  {
    name: 'Aurora Headphones',
    price: '$149',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    description: 'Immersive sound with all-day comfort.',
  },
  {
    name: 'Luma Smart Watch',
    price: '$199',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    description: 'Track your fitness and stay connected.',
  },
  {
    name: 'Nova Camera',
    price: '$249',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    description: 'Capture sharp details in every scene.',
  },
]

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="brand">Nova Store</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="hero-text">
            <h1>Upgrade your everyday essentials</h1>
            <p>
              Discover premium gadgets and smart accessories designed for modern living.
            </p>
            <button type="button">Shop Now</button>
          </div>
        </section>

        <section className="products" id="products">
          <h2>Featured Picks</h2>
          <div className="product-grid">
            {products.map((product) => (
              <article className="card" key={product.name}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <button type="button">Add to Cart</button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">© 2026 Nova Store — Built for a better digital life.</footer>
    </div>
  )
}

export default App
