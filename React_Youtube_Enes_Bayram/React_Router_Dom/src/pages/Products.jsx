import React from 'react'
import ProductComponent from '../Components/ProductComponent'
import { products } from '../data/products'



function Products() {

  
  return (
    <div>
      {
        products && products.map((product) => (
          <ProductComponent product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default Products
