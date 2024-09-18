import { Route , Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import { Category, ProductLayout, Products } from "./products";

export default function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductLayout />}>
                <Route index= {true} element = {<Products />} />
                <Route path="category/:categoryName" element = {<Category />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

