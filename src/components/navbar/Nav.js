import React from 'react'
import './NavB.css'
import { NavLink as Link, Router, Switch} from 'react-router-dom'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, MobileIcon } from './NavbarElemtents'
import logo from './logo.png'

import { useSelector, useDispatch } from 'react-redux'
import { fetchMan, fetchWomen, fetchSales } from '../../redux/actions/products'



const Navbar = ({toggle}) => {

    const dispatch = useDispatch();

    function setMan(){
        dispatch(fetchMan());
    }

    function setWomen(){
        dispatch(fetchWomen());
    }

    function setSales(){
        dispatch(fetchSales());
    }


    return (
        <div className = "header-cont">
          <Nav>
              <NavLink to="/App">
                  <img className="Logo" src={logo} alt="Logo"/>
              </NavLink>
              <MobileIcon onClick={toggle}>
              <Bars />
              </MobileIcon>
              <NavBtn>
                  <NavBtnLink onClick={e => setMan()} to="/Man" activeStyle>
                        Man
                  </NavBtnLink>
                  <NavBtnLink onClick={e => setWomen()} to="/Women" activeStyle>
                        Women
                  </NavBtnLink>
                  <NavBtnLink onClick={e => setSales()} to="/Sales" activeStyle>
                        Sales
                  </NavBtnLink>
                  <NavBtnLink to="/Cart" activeStyle>
                        Cart
                  </NavBtnLink>
              </NavBtn>
          </Nav>
        </div>
    );
};

export default Navbar;
