import { useEffect, useState } from "react"
import "./RecipeDetails.scss"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function RecipeDetailsPage() {
    const apiKey = `?apiKey=c12d33dfd1594f018031bd984180f312`
    const { recipeId } = useParams();
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const getRecipeDetails = async () => {
            try {
                const res = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information${apiKey}&includeNutrition=false`)
                setDetails(res.data)
            } catch (e) {
                console.error(e)
            }
        }
        getRecipeDetails()
    }, [])

    if (!details) {
        return <p>Loading</p>;
    }

    return (
        <seciton className="details">
            <h1 className="details__name">{details.title}</h1>
            <img src={details.image} className="details__img" alt="" />
            <ul className="details__list">
                <h4 className="details__ingredients">Ingredients List:</h4>
                {details.extendedIngredients?.map((item) => {
                    return (
                        <li className="details__item">{item.name}</li>
                    )
                })}
            </ul>
            <ol className="details__list">
                <h4 className="details__ingredients">Procedure:</h4>
                {details.analyzedInstructions[0].steps?.map((steps) => {
                    return (
                        <li className="details__item">{steps.step}</li>
                    )
                })}
            </ol>
        </seciton>
    )
}