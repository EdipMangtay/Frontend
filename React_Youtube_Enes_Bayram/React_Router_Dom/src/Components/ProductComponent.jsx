import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductComponent({product}) {
    const {id, name, price} = product;

    const navigate = useNavigate();


  return (
    <div style={{marginBottom : '40px' , backgroundColor:'lightGrey'}}>
      <div>Ürün Detayı</div>
      <div>
        <h3>İsim : {name}</h3>
        <h3>Fiyat : {price}</h3>
        <button onClick={() => navigate("/product-details/" + id )}>Detay Git </button>
        
      </div>
    </div>
  )
}

export default ProductComponent
