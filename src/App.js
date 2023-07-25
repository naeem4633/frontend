import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Listing from './components/Listing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product-details' element={<ProductDetails/>}/>
            <Route path='/listing' element={<Listing/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;