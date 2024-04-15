import { useEffect, useState } from "react"
import "./RecipeDetails.scss"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function RecipeDetailsPage() {
    const apiKey = `?apiKey=c12d33dfd1594f018031bd984180f312`
    const { recipeId } = useParams();
    const [details, setDetails] = useState()

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

    console.log(details);
    if (!details) {
        return <p>Loading</p>;
    }

    return (
        <>
            <section className="details__name">{details.title}</section>
            <img src={details.image} alt="" />
            <p>{details.extendedIngredients.length}</p>
        </>
    )
}