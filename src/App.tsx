import React from 'react';
import './App.css';
import Navbar from './globalComponents/Navbar/Navbar';
import Header from './globalComponents/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import CartModal from './globalComponents/CartModal/CartModal';

function App() {
  return (
    <BrowserRouter>
    <Header /> 
    <Navbar />
    <CartModal/>
    </BrowserRouter>
  );
}

export default App;
