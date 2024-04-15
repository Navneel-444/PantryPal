import "./ManualAdd.scss"
import add from "../../assets/icons/add-icon.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "../ListItem/ListItem";

export default function ManualAdd({ pantry }) {

    const [pantryItem, setPantryItem] = useState("")
    const [pantryQuantity, setPantryQuantity] = useState("")
    const [pantryList, setPantryList] = useState([])

    const handlepantryItem = (event) => {
        setPantryItem(event.target.value)
    }
    const handleQuantity = (event) => {
        setPantryQuantity(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPantryItem("");
        setPantryQuantity("")
        try {
            const reponse = await axios.post(`http://localhost:8080/${pantry}`, {
                item: pantryItem,
                quantity: pantryQuantity
            })
            getGroceryList()
        } catch (error) {
            console.error('error item not added', error)
        }
    }
    const getGroceryList = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/${pantry}`)
            setPantryList(res.data);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getGroceryList()
    }, []);

    return (
        <>
            <h4 className="add__title">Manual Add</h4>
            <form className="add" onSubmit={handleSubmit}>
                <section className="add__container">
                    <input onChange={handlepantryItem} value={pantryItem} id="item" type="text" className="add__name" placeholder="Grocery Item" />
                </section>
                <section className="add__container">
                    <input onChange={handleQuantity} value={pantryQuantity} type="number" className="add__quantity" placeholder="QTY" />
                </section>
                <button className="add__btn" type="submit"><img src={add} alt="add button for manual entry for gorcery list" className="add__icon" /></button>
            </form >
            <ul className="grocery__list">
                {pantryList?.map((item) => {
                    return (
                        <ListItem grocery={item} />
                    )
                })}
            </ul>
        </>
    )
}