import axiosInstance from '../../axios'
import { fetchProducts } from './products';

export const addProductCart = (item) =>({
    type: "ADD_PRODUCT_CART",
    payload: item,
});

export const addDetailProduct=(productId)=>({
    type: "ADD_ID_LOCAL",
    payload: productId,
});

export const setChanged = (item) =>({
    type: "SET_CHANGED",
    payload: item,
});

export const deleteFromCart=(id)=>(dispatch)=>{
    var ids = localStorage.getItem("cart")
    console.log(id)
    if(ids !== null){
        let res = ""
        var arr = ids.split(",")
        for(var i=0; i<arr.length; i++){
            if(arr[i]!=="null" && arr[i]!=="undefined"){
                if(id != arr[i]){
                    res += arr[i]
                    if(arr[i] !== arr[arr.length-1]){
                        res += ","
                    }
                }
            }
        }
        localStorage.setItem("cart", res)
    }
    dispatch(setChanged(id))
};

export const fetchItemFromCart=()=>(dispatch)=>{
    var ids = localStorage.getItem("cart")
    if(ids !== null){
        var arr = ids.split(",")
        for(var i=0; i<arr.length; i++){
            if(arr[i]!=="null" && arr[i]!=="undefined" && arr[i]!==""){
                axiosInstance.get(arr[i]+'/').then(({data}) => {
                    dispatch(addProductCart(data))
                });
            }
        }
    }
};