import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                <li><NavLink className="nav-bar__item" to="/recipes">Recipes</NavLink></li>
                <li><NavLink className="nav-bar__item" to="/">Dashboard</NavLink></li>
                <li><NavLink className="nav-bar__item" to="/grocery">Pantry</NavLink></li>
            </ul>
        </nav>
    );
}
