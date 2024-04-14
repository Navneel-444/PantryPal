import "./InventoryItem.scss"

export default function InventoryItem() {
    return (
        <li className="iventory-item">
            <p className="iventory-item__name">apple</p>
            <p className="iventory-item__qty">12</p>
            <button id="edit" className="iventory-item__btn">Edit</button>
            <button id="delete" className="iventory-item__btn">Delete</button>
        </li>
    )
}