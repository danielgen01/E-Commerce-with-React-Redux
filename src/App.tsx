import React from 'react';
import './App.css';
import Navbar from './globalComponents/Navbar/Navbar';
import Header from './globalComponents/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartModal from './globalComponents/CartModal/CartModal';
import Homepage from './pages/Homepage/Homepage';
import ConsolesPage from './pages/Consoles/ConsolesPage';
import LaptopsPage from './pages/Laptops/LaptopsPage';
import HandysPage from './pages/Handys/HandysPage';
import GadgetsPage from './pages/Gadgets/GadgetsPage';
import ProductPage from './pages/Product/ProductPage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar  />
        <CartModal  />
        <Routes>
          <Route path="" element={<Homepage />}></Route>
          <Route
            path="/consoles"
            element={<ConsolesPage />}
          ></Route>
          <Route
            path="/Laptops"
            element={<LaptopsPage />}
          ></Route>
          <Route
            path="/Handys"
            element={<HandysPage />}
          ></Route>
          <Route
            path="/Gadgets"
            element={<GadgetsPage />}
          ></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/items/:id" element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
