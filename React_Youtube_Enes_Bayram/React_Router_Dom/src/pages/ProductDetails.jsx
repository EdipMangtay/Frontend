import React from 'react';
import { useParams } from 'react-router-dom';
import {products} from '../data/products'; // products verisini import et
import Product from '../Components/ProductComponent'; // Product bileşenini import et

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Ürün Detayları</h1>
      <hr />
      {
        products && products.map(product => {
          if (product.id === id) {
            return (
              <Product product={product} key={product.id} />
            );
          }
          return null; // Eğer id eşleşmezse null döndür
        })
      }
    </div>
  );
}

export default ProductDetails;
