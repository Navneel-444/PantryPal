import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import InventoryListPage from './pages/Inventory/InventoryList';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/iventorylist" element={<InventoryListPage />}></Route>
        </Routes>
      </BrowserRouter>

    </>

  );

}

export default App;
