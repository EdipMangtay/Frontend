import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';  // Doğru import: getAllProducts
import Product from './Product';

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);  // "store.product" olmalı

    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());  // Doğru thunk işlevi: getAllProducts
    }, [dispatch]);

    return (
        <div className='flex-row' style={{flexWrap:"wrap", marginTop: "25px"}}>
            {/* Ürün listesi burada render edilecek */}
            {products && products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;