import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/products/products';
import ProductsLoadingComponent from './components/products/productsLoading';
import axiosInstance from './axios';
import Topbar from './components/topBar/Topbar';
import Navbar from './components/navbar/Nav';
import Sidebar from './components/sidebar/Sidebar';

import { useSelector, useDispatch } from 'react-redux'
import {fetchProducts, setMode} from './redux/actions/products'

function App(){

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  }

  const ProductsLoading = ProductsLoadingComponent(Products);
  const dispatch = useDispatch();
  const products = useSelector(({products})=>products.products);
  const isLoaded = useSelector(({products})=>products.isLoaded);

  useEffect(() => {
    dispatch(setMode(""));
    dispatch(fetchProducts());

  }, []);

  return (
      <div className="App">
            <Topbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <div className="Content">
                <Sidebar />
                <ProductsLoading isLoading={!isLoaded} Products={products} />
            </div>
      </div>
  );
}

export default App;