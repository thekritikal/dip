import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Nav';
import Topbar from '../../topBar/Topbar';
import './product.css';
import ImageSlider from './Slider/ImageSlider';
import { SliderData } from './Slider/SliderData';
import { SizeContainer, OrderBtn } from './ProductElements'

import { useSelector, useDispatch } from 'react-redux'
import { addDetailProduct} from '../../../redux/actions/cart'
import { fetchDetail} from '../../../redux/actions/products'
import { useParams } from 'react-router-dom';


const Product = () => {

    function f(){
        console.log(product)
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    const {productId}=useParams();
    const dispatch = useDispatch();
    const product = useSelector(({products})=>products.detailedProduct);
    const isLoaded = useSelector(({products})=>products.isLoadedDetail);
    const isShoes = useSelector(({products})=>products.isShoes);

    useEffect(() => {
        dispatch(fetchDetail(productId));
    }, [isLoaded]);

    let addToCart = id => {
        dispatch(addDetailProduct(id))
    }
    



    return (
        <div>
            <Topbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <div className="product__content">
                <div className="product__top__content">
                    <ImageSlider slides={[{image:product.image1}, {image:product.image2}, {image:product.image3}, {image:product.image4}]} />
                    <div className="info">
                        <h1>{product.brand}</h1>
                        <text className="description">{product.name}</text>
                        <div className="price">{product.price} грн</div>
                        <SizeContainer>
                                <div className="size__filter__txt">Choose your size</div>
                                {!isShoes?
                                <div className="product__clothing__size__filter">
                                    <table className="product__table__size">
                                        <tr className="product__row__size">
                                            <button className="product__clothing__size__btn">XS</button>
                                            <button className="product__clothing__size__btn">S</button>
                                            <button className="product__clothing__size__btn">M</button>
                                        </tr>
                                        <tr className="product__row__size">
                                            <button className="product__clothing__size__btn">L</button>
                                            <button className="product__clothing__size__btn">XL</button>
                                            <button className="product__clothing__size__btn">XXL</button>
                                        </tr>  
                                    </table>
                                </div>:
                                <div className="product__shoes__size">
                                    <table className="product__table__size">
                                        <tr className="product__row__size">
                                            <button className="product__btn__size">7</button>
                                            <button className="product__btn__size">7.5</button>
                                            <button className="product__btn__size">8</button>
                                            <button className="product__btn__size">8.5</button>
                                        </tr>
                                        <tr className="product__row__size">
                                            <button className="product__btn__size">9</button>
                                            <button className="product__btn__size">9.5</button>
                                            <button className="product__btn__size">10</button>
                                            <button className="product__btn__size">10.5</button>
                                        </tr>
                                        <tr className="product__row__size">
                                            <button className="product__btn__size">11</button>
                                            <button className="product__btn__size">11.5</button>
                                            <button className="product__btn__size">12</button>
                                            <button className="product__btn__size">12.5</button>
                                        </tr>        
                                    </table>
                                </div>
                                }
                        </SizeContainer>
                        <OrderBtn onClick={e => addToCart(product.id)}>Add to Cart</OrderBtn>
                    </div>
                </div>
                <div className="product__bottom__content">
                    <div className="product__description">
                        <div className="description__title">Description</div>
                        <div className="description__brand">{product.brand}</div>
                        <div className="description__name">{product.name}</div>
                        <div className="description__txt">{product.description}</div>
                    </div>
                    <div className="product__composition">
                        <div className="composition__title">Composition</div>
                        <div className="composition__txt">{product.composition1}</div>
                        <div className="composition__txt">{product.composition2}</div>
                        <div className="composition__txt">{product.composition3}</div>
                        <div className="composition__designer__article">{product.designer_article}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product