import { useState } from "react"
import "./NavBar.scss"

export default function NavBar() {
    const [currentPage, setCurrentPage] = useState("dashboard")


    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item">Recipes</li>
                <li className="nav-bar__item">Dashboard</li>
                <li className="nav-bar__item">Pantry</li>
            </ul>
        </nav>
    )
}