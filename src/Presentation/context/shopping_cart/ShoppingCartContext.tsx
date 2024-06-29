import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  
  const [shoppingCart, setShoppingCart] = useState([])

  const handleRemoveProduct = (name) => {
    console.log(name)
    const newShoppingCart =  shoppingCart.filter((product) => product.name !== name)
    setShoppingCart(newShoppingCart)
  }

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart, handleRemoveProduct}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}