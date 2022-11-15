import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ShowProducts from './components/ShowProducts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ShowProducts/>} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
      </Routes>  
    </Router>
  );
  }

export default App;
