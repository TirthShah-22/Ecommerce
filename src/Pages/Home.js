import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]); // Initialize products with an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const json = await response.json();
        console.log(json);
        setProducts(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {products.length > 0 ? (
          products.map((product) => <h1 key={product.id}>{product.name}</h1>) 
          // Ensure each child in a list has a unique "key" prop
        ) : (
          "Loading..."
        )}
      </h1>
      <h1>Hellooooo</h1>
    </div>
  );
}

export default Home;
