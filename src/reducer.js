const reducer = (state, action)=>{

    //Clearing the cart
   if(action.type === 'CLEAR_CART'){
    return {...state, cart:[]}
   }
     
   //Removing single item
   if(action.type === 'REMOVE'){
    return {...state,cart:state.cart.filter((item)=>{
        if(item.id !== action.id){
            return  item
        }
    })}
   }
    
   // Increasing the item
   if(action.type === 'INCREMENTCARTITEM'){
    let tempCart = state.cart.map((item)=>{
        if(item.id === action.id){
            return {...item, amount:item.amount + 1}
        }
        return item
       
    })
    return {...state, cart:tempCart}
   }

   //DEcreasing the item
   if(action.type ==='DECREMENTCARTITEM'){
    let tempCart = state.cart.map((item)=>{
        if(item.id === action.id){
            return {...item, amount:item.amount - 1}
        }
        return item
       
    })
    return {...state, cart:tempCart}
   }
   return state
}

export default reducer