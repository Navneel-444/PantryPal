import "./PantryTabs.scss"
import { NavLink } from "react-router-dom";

export default function PantryTab({ current }) {
    return (
        <>
            <section className="Pantry">
                <NavLink to="/grocery" className="Pantry__tab">
                    Grocery
                </NavLink>
                <NavLink to="/inventory" className="Pantry__tab">
                    Inventory
                </NavLink>
            </section >
        </>
    )
}