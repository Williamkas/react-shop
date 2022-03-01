 import { useState } from "react";

 const initialState = {
     cart: [],
 }

 const useInitialState = () => {
     const [state, setState] = useState(initialState);

     const addToCart = (payload) => {
         setState({
             ...state,
             cart:[...state.cart, payload] // DUDA? porqué necesito crear el primer elemento del objeto (...state) si lo estoy creando de nuevo en cart:[...state.cart, ]
         })
     }

     const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id) //DUDA? me confunde la sintaxis cart: state.cart.filter(items => ...
        })
     }

     return {
         state,
         addToCart,
         removeFromCart
     }
 }

 export default useInitialState;