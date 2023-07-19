import { useState, createContext, useEffect } from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/header/Header";
import React from "react";
import Cart from "./components/Cart/Cart";

export const UserContext = createContext();

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [addedListOfMeals, setAddedListOfMeals] = useState([]);

  const cartShownHandler = (condition) => {
    setCartIsShown(condition);
  };

  const finalListOfMeal = (ListOfMeal) => {
    setAddedListOfMeals(ListOfMeal);
  };

  useEffect(() => {
    const totalAmountOfAddedMeals = addedListOfMeals.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    setNumberOfItems(totalAmountOfAddedMeals);
  }, [addedListOfMeals]);

  const decreaseOrIncreaseAmount = (id, changeConditional) => {
    const currElement = addedListOfMeals.find((meal) => meal.id == id);
    if (changeConditional == "decrease") {
      currElement.amount--;
    } else {
      currElement.amount++;
    }
    const otherElement = addedListOfMeals.filter((meal) => meal != currElement);
    const decreasedOrIncreasedList = [currElement, ...otherElement].filter(
      (meal) => meal.amount > 0
    );
    setAddedListOfMeals(decreasedOrIncreasedList);
  };

  return (
    <UserContext.Provider
      value={{
        cartShownButton: cartShownHandler,
        cartNumberOfItem: numberOfItems,
        listOfAddedMealItems: addedListOfMeals,
        decrIncrAmount: decreaseOrIncreaseAmount,
      }}
    >
      <Header />
      <Meals onFinalListOfMeal={finalListOfMeal} />
      {cartIsShown ? <Cart /> : ""}
    </UserContext.Provider>
  );
}

export default App;
