import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import InventoryListPage from "./pages/InventoryList/InventoryList";
import GroceryList from "./pages/GroceryList/GroceryList"

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/inventory" element={<InventoryListPage />}></Route>
          <Route path="/grocery" element={<GroceryList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
