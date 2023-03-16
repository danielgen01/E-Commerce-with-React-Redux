import React from 'react';
import './App.css';
import Navbar from './globalComponents/Navbar/Navbar';
import Header from './globalComponents/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartModal from './globalComponents/CartModal/CartModal';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />
      <CartModal />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
