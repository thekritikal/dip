import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Products from '../../../components/products/products';
import ProductsLoadingComponent from '../../../components/products/productsLoading';
import Navbar from '../../navbar/Nav';
import Topbar from '../../topBar/Topbar';
import Sidebar from '../../../components/sidebar/Sidebar';

import { useSelector, useDispatch } from 'react-redux'
import {fetchSales} from '../../../redux/actions/products'

function Sales(){

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  }

  const ProductsLoading = ProductsLoadingComponent(Products);
  const dispatch = useDispatch();
  const products = useSelector(({products})=>products.products);
  const isLoaded = useSelector(({products})=>products.isLoaded);

  useEffect(() => {
    dispatch(fetchSales());

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

export default Sales;