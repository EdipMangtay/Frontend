import { Route , Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PageNotFound from "./components/pages/PageNotFound";
import { Category, Product, ProductLayout, Products } from "./products";
import Login from "./components/pages/Login";
import Fav from "./components/pages/Fav";
import PrivateRoot from "./PrivateRoot";

export default function SiteRoutes({ handleLogin, user }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductLayout user ={user}/>}>
                <Route index={true} element={<Products user ={user} />} />
                <Route path="category/:categoryName" element={<Category user={user} />} />
                <Route path="product/:productId" element={<Product user = {user} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/fav" element={<PrivateRoot user={user}><Fav /></PrivateRoot>} />
        </Routes>
    );
}

