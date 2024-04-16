import { useEffect, useState } from "react"
import "./RecipeDetails.scss"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function RecipeDetailsPage() {
    const apiKey = `?apiKey=c12d33dfd1594f018031bd984180f312`
    const { recipeId } = useParams();
    const [details, setDetails] = useState(null)
    const [inv, setInv] = useState(null)


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

    // useEffect(() => {
    //     const getGroceryList = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:8080/inventory`)
    //             setInv(res.data);
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    //     getGroceryList()
    // }, [])


    // function findCommonItems(array1, array2) {
    //     if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
    //     const commonItems = [];
    //     array1.forEach(item1 => {
    //         console.log(item1);
    //         array2.forEach(item2 => {
    //             console.log(item2);
    //             if (item1.item === item2.name) {
    //                 commonItems.push(item2);
    //             }
    //         });
    //     });

    //     return commonItems;
    // }

    // useEffect(() => {
    //     const commonItems = findCommonItems(inv, details);
    //     console.log(commonItems);
    // }, [inv, details]);

    // console.log(inv);
    // console.log(details);


    // if (!details) {
    //     return <p>Loading</p>;
    // }

    return (
        <>
            <h1 className="details__name">{details.title}</h1>
            <p>{details.extendedIngredients.length}</p>
            <img src={details.image} alt="" />
            <h4 className="details__ingredients">Ingredients List:</h4>
            <ul className="details__list">
                {details.extendedIngredients?.map((item) => {
                    return (
                        <li className="details__item">{item.name}</li>
                    )
                })}
            </ul>
            <h4 className="details__ingredients">Procedure:</h4>
            <ol className="details__steps">
                {details.analyzedInstructions[0].steps?.map((steps) => {
                    return (
                        <li className="details__item">{steps.step}</li>
                    )
                })}
            </ol>
        </>
    )
}