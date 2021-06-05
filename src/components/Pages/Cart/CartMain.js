import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Nav';
import Topbar from '../../topBar/Topbar';
import './cart.css'

import { useSelector, useDispatch } from 'react-redux'
import { fetchItemFromCart } from '../../../redux/actions/cart'
import Cart from './Cart'

function CartMain() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const dispatch = useDispatch();
  const products = useSelector(({ cart }) => cart.items);
  const Total_sum = useSelector(({ cart }) => cart.total_price);
  const Changed = useSelector(({ cart }) => cart.Changed);



  useEffect(() => {
    dispatch(fetchItemFromCart());

  }, []);

  //   useEffect(() => {
  //     dispatch(fetchItemFromCart());

  // }, [Changed]);

  return (
    <div className="Cart">
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="cart__content">
        <text className="cart__title">CART</text>
        {products.length > 0 ?
          <div className="row__container">
            <Cart Items={products} />
            <div className="summary__form">
              <div className="summary__block">
                <div className="sum__block__size">
                  <text className="summary__txt">Summary</text>
                </div>
                <div className="summary__line__block">
                  <text className="subtotal__txt">Subtotal</text>
                  <div className="subtotal__nuber">{Total_sum} uah</div>
                </div>
                <div className="summary__line__block">
                  <text className="shipping__txt">Shipping</text>
                  <div className="shipping__nuber">{Total_sum > 100 ? 0 : 10} uah</div>
                </div>
              </div>
              <div className="total__block">
                <div className="total__line__block">
                  <text className="total__txt">Total</text>
                  <div className="total__nuber">{Total_sum > 100 ? Total_sum : Total_sum + 10} uah</div>
                </div>
              </div>

              <div className="go__to__checkout__btn">Go to Checkout</div>
            </div>
          </div> :
          <div>
            asdsadas
                </div>
        }
      </div>
    </div>
  );
}

export default CartMain;