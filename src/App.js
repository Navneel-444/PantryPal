import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import InventoryListPage from "./pages/InventoryList/InventoryList";
import GroceryList from "./pages/GroceryList/GroceryList"
import RecipePage from './pages/Recipe/Recipe';
import RecipeDetailsPage from './pages/RecipeDetails/RecipeDetails';
import DashboardPage from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/inventory" element={<InventoryListPage />}></Route>
          <Route path="/grocery" element={<GroceryList />}></Route>
          <Route path="/recipes" element={<RecipePage />}></Route>
          <Route path="/recipes/details/:recipeId" element={<RecipeDetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
