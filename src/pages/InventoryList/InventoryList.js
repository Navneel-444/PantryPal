import "./InventoryList.scss";
import InventoryItem from '../../components/ListItem/ListItem';
import PantryTab from "../../components/PantryTabs/PantryTabs";
import ManualAdd from "../../components/ManualAdd/ManualAdd";

export default function InventoryListPage() {
    const inventory = `invertory`;
    return (
        <main className="inventory">
            <PantryTab />
            <h1 className="inventory__title">Inventory List</h1>
            <ManualAdd pantry={inventory} />
        </main>
    )
}