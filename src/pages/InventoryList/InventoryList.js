import "./InventoryList.scss";
import InventoryItem from '../../components/ListItem/ListItem';
import PantryTab from "../../components/PantryTabs/PantryTabs";

export default function InventoryListPage() {
    return (
        <main className="inventory">
            <PantryTab />
            <h1 className="inventory__title">Inventory List</h1>
            <ul className="inventory__list">
                <InventoryItem />
            </ul>
        </main>
    )
}