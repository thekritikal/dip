import { colors } from '@material-ui/core';
import axiosInstance from '../../axios'




export const fetchProducts=()=>(dispatch)=>{
    axiosInstance.get().then(({data}) => {
        dispatch(setProducts(data))
    });
}

export const setCategory=(items)=>({
    type: 'SET_CATEGORY',
    payload: items,
})

export const setProducts=(items)=>({
    type: 'SET_PRODUCTS',
    payload: items,
})

export const setDetail = (items) => ({
    type: 'SET_DETAIL_PRODUCTS',
    payload: items,
  });

export const fetchDetail=(productId)=>(dispatch)=>{
    axiosInstance.get(productId+'/').then(({data}) => {
        dispatch(setDetail(data))
    });
}

export const fetchMan=()=>(dispatch)=>{
    axiosInstance.get('man/').then(({data}) => {
        dispatch(setProducts(data))
    });
}

export const fetchWomen=()=>(dispatch)=>{
    axiosInstance.get('women/').then(({data}) => {
        dispatch(setProducts(data))
    });
}

export const fetchSales=()=>(dispatch)=>{
    axiosInstance.get('sale/').then(({data}) => {
        dispatch(setProducts(data))
    });
}

export const fetchFilter=(colour, category, size, price1, price2, mode)=>(dispatch)=>{
    let col = "", cat = "", siz = "", p1 = "", p2 = ""
    
    dispatch(setCategory(category));
    dispatch(setColor(colour));
    dispatch(setSize(size));
    dispatch(setPrice1(price1));
    dispatch(setPrice2(price2));


    if(colour.length !== 0){
        col = `&colour=${colour}`
    }
    if(category.length !== 0){
        cat = `&category=${category}`
   }
    if(size.length !== 0){
        siz = `&size=${size}`
    }
    if(price1.length !== 0){
        p1 = `&price1=${price1}`
    }
    if(price2.length !== 0){
        p2 = `&price2=${price2}`
    }
    let query = mode+"/?"+cat+col+siz+p1+p2;
    console.log(query)
    axiosInstance.get(query).then(({data}) => {
        dispatch(setProducts(data))
    });
}

export const setColor=(items)=>({
    type: 'SET_COLOR',
    payload: items,
})

export const setSize=(items)=>({
    type: 'SET_SIZE',
    payload: items,
})

export const setPrice1=(items)=>({
    type: 'SET_PRICE1',
    payload: items,
})

export const setPrice2=(items)=>({
    type: 'SET_PRICE2',
    payload: items,
})

export const setMode=(mode)=>({
    type: 'SET_MODE',
    payload: mode,
})

