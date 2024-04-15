import "./InventoryList.scss";
import PantryTab from "../../components/PantryTabs/PantryTabs";
import ManualAdd from "../../components/ManualAdd/ManualAdd";

export default function InventoryListPage() {
    const inventory = `inventory`;
    return (
        <main className="inventory">
            <PantryTab />
            <h1 className="inventory__title">Inventory List</h1>
            <ManualAdd pantry={inventory} />
        </main>
    )
}