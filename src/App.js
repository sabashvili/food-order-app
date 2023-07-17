import { Fragment, useState, createContext } from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/header/Header";
import React from "react";
import Cart from "./components/Cart/Cart";

export const UserContext = createContext();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const cartShownHandler = (condition) => {
    setCartIsShown(condition);
  };

  return (
    <UserContext.Provider
      value={{
        cartShownButton: cartShownHandler,
        cartNumberOfItem: numberOfItems,
      }}
    >
      <Header />
      <Meals />
      {cartIsShown ? <Cart /> : ""}
    </UserContext.Provider>
  );
}

export default App;
