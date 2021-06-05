import React,{useState} from 'react';
import './Side.css'
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import {SidebarContent, SidebarContainer, SearchIcon, HideIcon} from './SideElements'
import { CgSearch } from 'react-icons/cg'
import RangeSlider from './rangeSlider'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useSelector, useDispatch } from 'react-redux'
import { fetchFilter, setSize } from '../../redux/actions/products'


const Sidebar = () => {
  
  const dispatch = useDispatch()

  const [show1,setShow1]=useState(true)
  const [show2,setShow2]=useState(true)
  const [show3,setShow3]=useState(true)
  const [isClothing,setTypeOfSize]=useState(true)
  const [show4,setShow4]=useState(true)

  const Mode = useSelector(({products})=>products.mode);

  function setShoes(){
    setTypeOfSize(false)
    dispatch(fetchFilter(colour, "shoes", size, price1, price2, Mode))
  }

  function setClothe(){
    setTypeOfSize(true)
    dispatch(fetchFilter(colour, "clothing", size, price1, price2, Mode))
  }

  function setAccessories(){
    dispatch(fetchFilter(colour, "accessories", size, price1, price2, Mode))
  }

  let setSize_new = id => {
    dispatch(fetchFilter(colour, category, id, price1, price2, Mode))
  }

  let setColour_new = id => {
    dispatch(fetchFilter(id, category, size, price1, price2, Mode))
  }

  let setPrice1_new = id => {
    dispatch(fetchFilter(colour, category, size, id, price2, Mode))
  }

  let setPrice2_new = id => {
    dispatch(fetchFilter(colour, category, size, price1, id, Mode))
  }




  const colour = useSelector(({products})=>products.colour);
  const category = useSelector(({products})=>products.category);
  const size = useSelector(({products})=>products.size);
  const price1 = useSelector(({products})=>products.price1);
  const price2 = useSelector(({products})=>products.price2);





  return (
    <SidebarContent>
{/* SearchBox */}
      <SidebarContainer>
          <div className="search-box">
              <input className="search-txt" type="text" name="" placeholder="Search"></input>
              <SearchIcon></SearchIcon>
          </div>
      </SidebarContainer>
{/* Category */}
      <SidebarContainer>
          <div className="filter__box">
            <div className="filter__txt">Category</div>
            <HideIcon onClick={()=>setShow1(!show1)}></HideIcon>
          </div>
          {
          show1?<div className="category__filter" id="list">
              <a className="category__ref" href="#" onClick={setShoes}>Shoes</a>
              <a className="category__ref" href="#" onClick={setClothe}>Clothing</a>
              <a className="category__ref" href="#" onClick={setAccessories}>Accessories</a>
          </div>:null
          }
      </SidebarContainer>
{/* Size */}
      <SidebarContainer>
      <div className="filter__box">
            <div className="filter__txt">Size</div>
            <HideIcon onClick={()=>setShow2(!show2)}></HideIcon>
      </div>
      {
        show2?isClothing?<div className="clothing__size__filter">
              <table className="table__size">
                  <tr className="row__size">
                      <button className="clothing__size__btn" onClick={e => setSize_new("XS")}>XS</button>
                      <button className="clothing__size__btn" onClick={e => setSize_new("S")}>S</button>
                      <button className="clothing__size__btn" onClick={e => setSize_new("M")}>M</button>
                  </tr>
                  <tr className="row__size">
                      <button className="clothing__size__btn" onClick={e => setSize_new("L")}>L</button>
                      <button className="clothing__size__btn" onClick={e => setSize_new("XL")}>XL</button>
                      <button className="clothing__size__btn" onClick={e => setSize_new("XXL")}>XXL</button>
                  </tr>  
            </table>
        </div>:
        <div className="shoes__size">
            <table className="table__size">
              <tr className="row__size">
                  <button className="btn__size" onClick={e => setSize_new("7")}>7</button>
                  <button className="btn__size" onClick={e => setSize_new("7.5")}>7.5</button>
                  <button className="btn__size" onClick={e => setSize_new("8")}>8</button>
                  <button className="btn__size" onClick={e => setSize_new("8.5")}>8.5</button>
              </tr>
              <tr className="row__size">
                  <button className="btn__size" onClick={e => setSize_new("9")}>9</button>
                  <button className="btn__size" onClick={e => setSize_new("9.5")}>9.5</button>
                  <button className="btn__size" onClick={e => setSize_new("10")}>10</button>
                  <button className="btn__size" onClick={e => setSize_new("10.5")}>10.5</button>
              </tr>
              <tr className="row__size">
                  <button className="btn__size" onClick={e => setSize_new("11")}>11</button>
                  <button className="btn__size" onClick={e => setSize_new("11.5")}>11.5</button>
                  <button className="btn__size" onClick={e => setSize_new("12")}>12</button>
                  <button className="btn__size" onClick={e => setSize_new("12.5")}>12.5</button>
              </tr>
              
            </table>

        </div>:null
      }
      </SidebarContainer>
{/* Colour */}
      <SidebarContainer>
          <div className="filter__box">
          <div className="filter__txt">Colour</div>
            <HideIcon onClick={()=>setShow3(!show3)}></HideIcon>
          </div>
          {
          show3?<div className="category__filter">
            {/* <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div >black</div>
            </div>
            <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div>white</div>
            </div>
            <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div>blue</div>
            </div>
            <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div>yellow</div>
            </div>
            <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div>purple</div>
            </div>
            <div className="inner__container">
              <input className="colours" type="checkbox" ></input> <div>red</div>
            </div> */}
            <RadioGroup aria-label="colour" name="colour1">
              <FormControlLabel value="black" control={<Radio />} label="black" onClick={e => setColour_new("black")}/>
              <FormControlLabel value="white" control={<Radio />} label="white" onClick={e => setColour_new("white")}/>
              <FormControlLabel value="blue" control={<Radio />} label="blue" onClick={e => setColour_new("blue")}/>
              <FormControlLabel value="red" control={<Radio />} label="red" onClick={e => setColour_new("red")}/>
              <FormControlLabel value="yellow" control={<Radio />} label="yellow" onClick={e => setColour_new("yellow")}/>
              <FormControlLabel value="purple" control={<Radio />} label="purple" onClick={e => setColour_new("purple")}/>
            </RadioGroup>
          </div>:null
          }
      </SidebarContainer>

      <SidebarContainer>
      <div className="filter__box">
          <div className="filter__txt">Price</div>
            <HideIcon onClick={()=>setShow4(!show4)}></HideIcon>
          </div>
          {
          show4?<div className="pricerange__size">
            <RangeSlider />
          </div>:null
          }
      </SidebarContainer>

    </SidebarContent>
  )
}



export default Sidebar