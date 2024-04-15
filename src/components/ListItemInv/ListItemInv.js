import "./ListItem.scss";
import editbtn from "../../assets/icons/edit-icon.svg";
import deletebtn from "../../assets/icons/delete-icon.svg"
import axios from "axios";
import { useState } from "react";

export default function ListItemInv(grocery, tab) {
    const id = `${grocery.grocery.id}`;
    const [pantryItem, setPantryItem] = useState("")
    const [pantryQuantity, setPantryQuantity] = useState("")

    const handlepantryItem = (event) => {
        setPantryItem(event.target.value)
    }
    const handleQuantity = (event) => {
        setPantryQuantity(event.target.value)
    }
    const handleDelete = async () => {
        try {
            window.location.reload();
            await axios.delete(`http://localhost:8080/inventory/${id}`);
        } catch (error) {
            console.error(error);
        }
    }
    const handleEdit = async () => {
        try {
            window.location.reload();
            await axios.put(`http://localhost:8080/inventory/${id}`, {
                id: id,
                item: pantryItem,
                quantity: pantryQuantity
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleEdit}>
            <li className="list-item" key={grocery.grocery.id}>
                <section className="list-item__container">
                    <input onChange={handlepantryItem} value={pantryItem} type="text" className="list-item__name" placeholder={grocery.grocery.item} />
                </section>
                <section className="list-item__container">
                    <section className="list-item__quantity">
                        <h4 className="list-item__title">QTY:</h4>
                        <input onChange={handleQuantity} value={pantryQuantity} type="number" className="list-item__qty" placeholder={grocery.grocery.quantity} />
                    </section>
                    <button type="submit" className="list-item__btn"><img src={editbtn} alt="edit button for list item" className="list-item__icon" /></button>
                    <button onClick={handleDelete} className="list-item__btn"> <img src={deletebtn} alt="delete button from list item" className="list-item__icon" /></button>
                </section>
            </li>
        </form>
    )
}