import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartAmount, setCartAmount] = useState(0);
  const [overlayColor, setOverlayColor] = useState(false);

  return (
    <CartContext.Provider
      value={{ cartAmount, setCartAmount, overlayColor, setOverlayColor }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
