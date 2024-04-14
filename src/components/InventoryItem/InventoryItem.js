import "./InventoryItem.scss";
import editbtn from "../../assets/icons/edit-icon.svg";
import deletebtn from "../../assets/icons/delete-icon.svg"


export default function InventoryItem() {
    return (
        <li className="inventory-item">
            <section className="inventory-item__container">
                <p className="inventory-item__name">apple</p>
            </section>
            <section className="inventory-item__container">
                <section className="inventory-item__quantity">
                    <h4 className="inventory-item__title">QTY:</h4>
                    <p className="inventory-item__qty">12</p>
                </section>
                <button id="edit" className="inventory-item__btn"><img src={editbtn} alt="edit button for inventory item" className="inventory-item__icon" /></button>
                <button id="delete" className="inventory-item__btn"> <img src={deletebtn} alt="delete button from inventory item" className="inventory-item__icon" /></button>
            </section>
        </li>
    )
}