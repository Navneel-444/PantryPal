import "./Recipe.scss";
import add from "../../assets/icons/add-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeList from "../../components/RecipeList/RecipeList";

export default function RecipePage() {
    const apiKey = `?apiKey=c12d33dfd1594f018031bd984180f312`
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])

    const handleChangeIngreident = (e) => {
        setIngredients(e.target.value);
    };

    const getRecipes = async () => {
        try {
            const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}&ingredients=${ingredients}&number=25`)
            setRecipes(res.data)
        } catch (e) {
            console.error(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipes()
        setIngredients("")
    }

    return (
        <main className="recipe">
            <h1 className="recipe__title">Avaiable Recipes</h1>
            <form onSubmit={handleSubmit} className="recipe__type">
                <label className="recipe__label" htmlFor="food">What are you craving?</label>
                <section className="recipe__question">
                    <input className="recipe__input" name=" food" type="text" placeholder="ex.beef,carrots" onChange={handleChangeIngreident} value={ingredients} />
                    <button className="recipe__submit">Enter</button>
                </section>
            </form>
            <ul className="recipe__list">
                {recipes?.map((recipe) => {
                    return (
                        <RecipeList first={recipe} />
                    )
                })}
            </ul>
        </main >
    )
};