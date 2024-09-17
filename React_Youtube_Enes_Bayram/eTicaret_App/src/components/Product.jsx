import React from 'react'
import '../css/Product.css';

function Product({product}) {
    const {id, price, title, description,image} = product;

    return (
    <div className='card'>
        <img className="image" src={image} alt="" />
        <div>
            <p style={{textAlign:"center" , height:"57px"}}>{title}</p>
            <h3 style={{textAlign:"center"}}>{price}₺</h3>
        </div>
        <div className='flex-row'>
            <button className="btn">Detayına Git</button>
        </div>
    </div>
  )
}

export default Product
