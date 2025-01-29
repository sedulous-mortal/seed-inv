// connected to db.json sample db file in public folder
import React, { useState, useEffect } from 'react';

function SeedList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.variety} {product.name} by {product.source} - {product.cost_in_cents_per_seed == "1" ? product.cost_in_cents_per_seed + " cent per seed" : product.cost_in_cents_per_seed + " cents per seed"} </li>
      ))}
    </ul>
  );
}

export default SeedList;