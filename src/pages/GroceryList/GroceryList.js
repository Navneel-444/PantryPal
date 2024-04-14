import "./GroceryList.scss"
import ListItem from "../../components/ListItem/ListItem";
import Pantrytabs from "../../components/PantryTabs/PantryTabs";
import ManualAdd from "../../components/ManualAdd/ManualAdd";
export default function GroceryList() {
    return (
        <main className="grocery">
            <Pantrytabs />
            <h1 className="grocery__title">Grocery List</h1>
            <ManualAdd />
            <ul className="grocery__list">
                <ListItem />
            </ul>
        </main>
    )
}