import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [imageOverlay, setImageOverlay] = useState(false);

  return (
    <ProductContext.Provider value={{ imageOverlay, setImageOverlay }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
