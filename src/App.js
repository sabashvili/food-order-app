import { Fragment, useState, createContext } from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/header/Header";
import React from "react";

export const UserContext = createContext();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };

  return (
    <UserContext.Provider value={{ cartShownButton: cartShownHandler }}>
      <Header />
      <Meals />
    </UserContext.Provider>
  );
}

export default App;
