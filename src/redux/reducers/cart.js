import { act } from "react-dom/cjs/react-dom-test-utils.production.min";


const initialState = {
    items: [],
    total_price: 0,
    total_count: 0,
    Changed: false,
    isLoaded: false,
    
}

// const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

let getTotalPrice = arr => {
    let res = 0;
    for(let i=0; i<arr.length; i++){
        res += arr[i].price
    }
    return res
}

const cart = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_ID_LOCAL':
            var temp = localStorage.getItem("cart")
            if(temp != null && temp != ""){
                localStorage.setItem("cart", temp + "," + action.payload)
            }
            else{
                localStorage.setItem("cart", action.payload)
            }
            return{
                ...state,
            }
        case 'ADD_PRODUCT_CART':
            return{
                ...state,
                items: [...state.items, action.payload],
                total_price: getTotalPrice([...state.items, action.payload]),
                total_count: [...state.items, action.payload].length,
            }
        case 'SET_CHANGED':
            return{
                ...state,
                Changed: action.payload,
            }
        default:
            return state
    }
}


export default cart