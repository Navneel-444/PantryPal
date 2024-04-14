import "./ManualAdd.scss"
import add from "../../assets/icons/add-icon.svg"
import { useState } from "react";
export default function ManualAdd() {

    const [groceryItem, setGorceryItem] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleGroceryItem = (event) => {
        setGorceryItem(event.target.value)
    }
    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(quantity);
        console.log(groceryItem);
    }
    return (
        <>
            <h4 className="add__title">Manual Add</h4>
            <form className="add" onSubmit={handleSubmit}>
                <section className="add__container">
                    <input onChange={handleGroceryItem} value={groceryItem} id="item" type="text" className="add__name" placeholder="Grocery Item" />
                </section>
                <section className="add__container">
                    <input onChange={handleQuantity} value={quantity} type="number" className="add__quantity" placeholder="QTY" />
                </section>
                <button className="add__btn" type="submit"><img src={add} alt="add button for manual entry for gorcery list" className="add__icon" /></button>
            </form >
        </>
    )
}