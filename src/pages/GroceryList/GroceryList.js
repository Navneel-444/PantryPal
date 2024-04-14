import "./GroceryList.scss"
import ListItem from "../../components/ListItem/ListItem";
import Pantrytabs from "../../components/PantryTabs/PantryTabs";
import ManualAdd from "../../components/ManualAdd/ManualAdd";
export default function GroceryList() {
    const grocery = `grocery`;

    return (
        <main className="grocery">
            <Pantrytabs />
            <h1 className="grocery__title">Grocery List</h1>
            <ManualAdd pantry={grocery} />
            <ul className="grocery__list">
                <ListItem />
            </ul>
        </main>
    )
}