import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart:cartItems ,
  total:0,
  amount:0
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  
  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
    // console.log('none')
  }
  
  const remove = (id)=>{
    dispatch({type:'REMOVE', id:id})
  }

  const incrementCartItem = (id, amount)=>{
    dispatch({type:'INCREMENTCARTITEM', id:id, amount:amount})
  }

  const decrementCartItem = (id, amount)=>{
    dispatch({type:'DECREMENTCARTITEM', id:id, amount:amount})
  }
  return ( 
    <AppContext.Provider
      value={{
        ...state,clearCart, remove, incrementCartItem, decrementCartItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
