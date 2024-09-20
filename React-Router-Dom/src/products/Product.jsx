import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(res => setProduct(res))
            .catch(err => console.error(err));
    }, [productId]);

    return (
        <>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" className="w-100 img thumbnail" />
            <p>{product.description}</p>
            <p>{product.price}</p>
            
        </>
    );
}
