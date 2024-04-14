import "./InventoryList.scss";
import InventoryItem from '../../components/InventoryItem/InventoryItem';

export default function InventoryListPage() {
    return (
        <main className="inventory">
            <h1 className="inventory__title">Inventory List</h1>
            <ul className="inventory__list">
                <InventoryItem />
            </ul>
        </main>
    )
}