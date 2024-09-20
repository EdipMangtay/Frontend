import { NavLink } from "react-router-dom";
import Themeicon from "./Themeicon";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#">Contex API</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/hakkimizda">About</NavLink>
                        <NavLink className="nav-link" to="/iletisim">Contact</NavLink>

                        <Themeicon />
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}