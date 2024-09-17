import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { price, image, title, description } = selectedProduct || {};
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count 
        };
        dispatch(addToBasket(payload));
    };

    useEffect(() => {
        const getProductById = () => {
            products?.forEach((product) => {
                if (product.id.toString() === id) {
                    dispatch(setSelectedProduct(product));
                }
            });
        };
        getProductById();
    }, [id, products, dispatch]);

    return (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ marginRight: "40px" }}>              
                <img src={image} width={300} height={500} alt={title} />
            </div>
            <div>
                <h1 style={{ fontFamily: "arial" }}>{title}</h1>
                <p style={{ fontFamily: "arial" }}>{description}</p>
                <h1 style={{ fontSize: "50px", fontFamily: "arial", color: "red", fontWeight: "bold" }}>{price}</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: "40px", marginRight: "5px" }} />
                    <span style={{ fontSize: "35px" }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: "40px", marginLeft: "5px" }} />
                </div>
                <button onClick={addBasket} style={{ marginTop: "20px", padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" }}>Sepete Ekle</button>
            </div>
        </div>
    );
}

export default ProductDetails;