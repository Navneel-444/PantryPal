import "./Recipe.scss";
import add from "../../assets/icons/add-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RecipePage() {
    const apiKey = `?apiKey=c12d33dfd1594f018031bd984180f312`
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}&ingredients=beef,carrots&number=25`)
                setRecipes(res.data)
            } catch (e) {
                console.error(e)
            }
        }
        getRecipes()
        console.log(recipes);
    }, [])

    return (
        <main className="recipe">
            <h1 className="recipe__title">Avaiable Recipes</h1>
            <ul className="recipe__list">
                {recipes?.map((recipe) => {
                    return (
                        <li className="recipe__overview" key={recipe.id}>
                            <section className="recipe__info">
                                <Link className="recipe__name" to={`/recipes/details/${recipe.id}`}>
                                    <h4 className="recipe__name" >{recipe.title}</h4>
                                </Link>
                            </section>
                            <img src={recipe.image} alt="" className="recipe__image" />
                            <form className="recipe__add">
                                <select name="date" className="recipe__date">
                                    <option value="invalid">Please select day</option>
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thrusday">Thrusday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                                <select name="date" className="recipe__date">
                                    <option value="invalid">Please select Meal</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                                <button><img src={add} alt="button to add to weekly meal planner" /></button>
                            </form>
                        </li>
                    )
                })}
            </ul>
        </main >
    )
}