/*import { createContext } from "react";

const contextModel = {
  cartAmount: 0,
  fillCartAmount: (amount) => {},
};
export const AppContext = createContext(contextModel);

const AppContextProvider = (props) => {
  const [cartAmount, setCartAmount] = useState(0);

  const fillCartAmount = (amount) => {
    setCartAmount(amount);
  };

  return (
    <AppContext.Provider value={{ cartAmount, fillCartAmount }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;*/
