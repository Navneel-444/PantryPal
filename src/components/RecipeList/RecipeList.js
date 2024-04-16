import "./RecipeList.scss"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import add from "../../assets/icons/add-icon.svg";
import axios from "axios";


export default function RecipeList(first) {

    const [id, setId] = useState(first.first.id)
    const [name, setName] = useState(first.first.title)
    const [img, setImg] = useState(`${first.first.image}`)
    const [day, setDay] = useState()
    const [meal, setMeal] = useState()

    const handleDay = (e) => {
        setDay(e.target.value);
    };
    const handleMeal = (e) => {
        setMeal(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(name);
            const reponse = await axios.post(`http://localhost:8080/recipes`, {
                name: name,
                image: img,
                recipe_ID: id,
                day: day,
                meal: meal
            })
        } catch (error) {
            console.error('error item not added', error)
        }
    }
    return (
        <>
            <li className="recipe__overview" key={id}>
                <section className="recipe__info">
                    <Link className="recipe__name" to={`/recipes/details/${id}`}>
                        <h4 className="recipe__name">{name}</h4>
                    </Link>
                </section>
                <img src={img} alt="" className="recipe__image" />
                <form className="recipe__add" onSubmit={handleSubmit}>
                    <select name="date" className="recipe__date"
                        onChange={handleDay}
                        value={day}>
                        <option value="invalid">Please select day</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thrusday">Thrusday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                    <select name="date" className="recipe__date"
                        onChange={handleMeal}
                        value={meal}>
                        <option value="invalid">Please select Meal</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                    <button type="submit"><img src={add} alt="button to add to weekly meal planner" /></button>
                </form>
            </li>
        </>
    )
}