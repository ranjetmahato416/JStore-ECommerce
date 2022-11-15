import {React, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import Carts from './components/Carts';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Navbar/Login';
import Register from './components/Navbar/Register';

function App() {


    return (
      <>
      <BrowserRouter>
      <Navbar />
       <Routes>
            <Route index  element = {<Home/>}/>
            <Route exact path="/product" element = {<Product/>}/>
            <Route exact path="/products" element = {<Products/>}/>
            <Route exact path="/products/:id" element = {<Products/>}/>
            <Route exact path = "/carts/" element = {<Carts/>}/>
            <Route exact path = "/payment/" element = {<Payment/>}/>
            <Route exact path = "/about/" element = {<About/>}/>
            <Route exact path = "/contact/" element = {<Contact/>}/>
            <Route exact path = "/login/" element = {<Login/>}/>
            <Route exact path = "/register/" element = {<Register/>}/>

      </Routes>
      <Footer/>
      
     </BrowserRouter>
      
      </>
     
     
    
      
    

    );
    
  
}

export default App;
