import axios from "axios";
import deletebtn from "../../assets/icons/delete-icon.svg"
import "./Recipe.scss"
import { Link } from "react-router-dom";

export default function Recipe(item) {
    const handleDelete = async () => {
        try {
            window.location.reload();
            await axios.delete(`http://localhost:8080/recipes/${item.item.id}`);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <section className="dashboard__container">
            <section className="dashboard__info">
                <h2 className="dashboard__day">{item.item.day}</h2>
                <p className="dashboard__title">{item.item.meal}</p>
                <img src={item.item.image} alt="" className="dashboard__image" />
            </section>
            <section className="dashboard__meal">
                <Link className="dashboard__name" to={`/recipes/details/${item.item.recipe_ID}`}>
                    <p className="dashboard__name">{item.item.name}</p>
                </Link>
                <button onClick={handleDelete} className="dashboard__delete"><img src={deletebtn} alt="delet button from dashboard" className="dashboard__icon" /></button>
            </section>
        </section>
    )
}