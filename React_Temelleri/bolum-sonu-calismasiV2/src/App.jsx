import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // Veriyi fetch ile çekme işlemi
  useEffect(() => {
    fetch("./data/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.data)) // data içindeki array'e erişiyoruz
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className="container">
      <h1>Ürün Listesi</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.thumbnail} alt={product.name} width="200" />
            <p>Mevcut mu? {product.isAvailable ? "Evet" : "Hayır"}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;