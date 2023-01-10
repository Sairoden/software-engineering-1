import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem)
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: 0,
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = cartItemToRemove =>
    setCartItems(removeCartItem(cartItems, cartItemToRemove));

  const value = { cartItems, addItemToCart, cartTotal, removeItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
