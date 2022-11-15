import React,{useEffect,useState} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from './redux/productSlice';
import ShowProducts from './components/ShowProducts';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <ShowProducts/>
    </>
  );
  }

export default App;
