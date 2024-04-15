import "./InventoryList.scss";
import InventoryItem from '../../components/ManualAddInv/ManualAddInv';
import PantryTab from "../../components/PantryTabs/PantryTabs";
import ManualAdd from "../../components/ManualAdd/ManualAdd";

export default function InventoryListPage() {
    const tab = "inventory";

    return (
        <main className="inventory" >
            <PantryTab />
            <h1 className="inventory__title">Inventory List</h1>

            <ul className="inventory__list">
                < InventoryItem pantry={tab} />
            </ul>

        </main>
    )
}