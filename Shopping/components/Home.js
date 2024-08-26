import React, { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';
  const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error:', error));
    }, []);
        
    return (
      <div >
        
        {products.map((product) => (
        <Card 
          key={product.id} 
          title={product.title}
          description={product.description}
          img={product.image} 
        />
      ))}

      </div>

    );
  };

export default Home;
