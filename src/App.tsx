import React from 'react';
import './App.css';
import Navbar from './globalComponents/Navbar/Navbar';
import Header from './globalComponents/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header /> 
    <Navbar />
    </BrowserRouter>
  );
}

export default App;
