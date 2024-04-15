import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import InventoryListPage from "./pages/InventoryList/InventoryList";
import GroceryList from "./pages/GroceryList/GroceryList"
import RecipePage from './pages/Recipe/Recipe';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/inventory" element={<InventoryListPage />}></Route>
          <Route path="/grocery" element={<GroceryList />}></Route>
          <Route path="/recipes" element={<RecipePage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
