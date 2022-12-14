import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_28 from './Reducer_28';
import cartItems from './data';

const AppContext_28 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount:4, 
  total:999.9
}

const AppProvider_28 = ({children}) => {
  const[state, dispatch] = useReducer(Reducer_28,initialState);

  useEffect(()=>{
    dispatch({type: 'GET_TOTALS'});
  },[state.cart])

  const clearCart = () =>{
    dispatch({type: 'CLEAR_CART'})
  }
  const increase =(id)=>{
    dispatch({type:'INCREASE', payload:id})
  }
  return <AppContext_28.Provider value ={{...state,
  clearCart, increase}}>
     {children}
  </AppContext_28.Provider>
};



const useGlobalContext_28 = ()=>{
  return useContext(AppContext_28);
}

export  {AppProvider_28,useGlobalContext_28,AppContext_28};
