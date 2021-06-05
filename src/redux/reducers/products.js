import React from 'react'



const initialState = {
    products: [],
    detailedProduct: [],
    isLoaded: false,
    isLoadedDetail: false,
    isShoes: true,
    colour: "",
    category: "",
    size: "",
    price1: "",
    price2: "",
    mode: "",

}


const products = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return{
                ...state, 
                products: action.payload, 
                isLoaded: true,
            }
        case 'SET_DETAIL_PRODUCTS':
            var Shoes = false
            if(action.payload.category==='shoes'){Shoes = true}
            return{
                ...state,
                detailedProduct: action.payload,
                isLoadedDetail: true,
                isShoes: Shoes,
            }
        case 'SET_CATEGORY':
            return{
                ...state, 
                category: action.payload,
                
            }
        case 'SET_COLOR':
            return{
                ...state, 
                colour: action.payload, 
            }
        case 'SET_SIZE':
            return{
                ...state, 
                size: action.payload, 
            }
        case 'SET_PRICE1':
            return{
                ...state, 
                price1: action.payload, 
            }
        case 'SET_PRICE2':
            return{
                ...state, 
                 price2: action.payload, 
            }
        case 'SET_MODE':
            return{
                ...state, 
                mode: action.payload, 
        }
        default:
            return state
    }
}

export default products