import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Nav';
import Topbar from '../../topBar/Topbar';
import './cart.css';
import { DelBtn } from './CartElements'
import { useSelector, useDispatch } from 'react-redux'
import {deleteFromCart} from '../../../redux/actions/cart'

const Cart = (props) => {

    const dispatch = useDispatch() 
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen)
    }

    let deleteItem = id => {
        dispatch(deleteFromCart(id))
        window.location.reload()
    }
    


    const { Items } = props;
    if (!Items || Items.length === 0) return <p>Can not find any Products, sorry</p>;
    return (
        <div>
            
        {Items.map((item) => {
            return (
                <div className="order__form">
                <div className="order__product__form">
                    <div className="img__sqare">
                        <img className="product__img" src={item.image1}/>
                    </div>
                    <div className="descripttion__sqare">
                        <div className="descripttion__sqare__brand">{item.brand}</div>
                        <div className="descripttion__sqare__name">{item.name}</div>
                    </div>
                    <div className="price__sqare">{item.price} uah</div>
                    <div className="size__sqare">
                        <text className="size__title">Size</text>
                        <div className="change__collumn">
                            <text className="size__number">{item.size} US</text>
                            <div className="change__btn">Change</div>
                        </div>
                        <text className="size__title">Quantity</text>
                        <div className="change__collumn">
                            <text className="size__number">1</text>
                            <div className="change__btn">Change</div> 
                        </div>
                    </div>
                    <DelBtn onClick={e => deleteItem(item.id)}></DelBtn>
                </div>
               
            </div>
        )
        
        }
        )
        }
    </div>
    )

}


export default Cart
