import "./ListItem.scss";
import editbtn from "../../assets/icons/edit-icon.svg";
import deletebtn from "../../assets/icons/delete-icon.svg"


export default function listItem() {
    return (
        <li className="list-item">
            <section className="list-item__container">
                <p className="list-item__name">apple</p>
            </section>
            <section className="list-item__container">
                <section className="list-item__quantity">
                    <h4 className="list-item__title">QTY:</h4>
                    <p className="list-item__qty">12</p>
                </section>
                <button id="edit" className="list-item__btn"><img src={editbtn} alt="edit button for list item" className="list-item__icon" /></button>
                <button id="delete" className="list-item__btn"> <img src={deletebtn} alt="delete button from list item" className="list-item__icon" /></button>
            </section>
        </li>
    )
}