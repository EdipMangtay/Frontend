import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(res => setCategories(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Kategoriler</h1>
            <div className="list-group">
                {
                    categories.map((item, index) => <Link 
                    className="list-group-item list-group-item-action"
                    key={index} 
                    to={`/products/category/${item}`}>{item}
                    
                    </Link>)
                }
                {/* <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">Disabled link item</a> */}
            </div>
        </>
    )
}
