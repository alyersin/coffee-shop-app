import { createContext, useContext, useState } from "react";

// 1
const CartContext = createContext();
// 2
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      //Check if the product already exists in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        //if it exists, update the quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : items
        );
      }
      // If it's a new item, add it with a quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      prevItems.filter((item) => item.id !== productId);
    });
  };
};
