import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";

const listOfMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 25,
    amount: 0,
  },
  {
    id: "m2",
    name: "Carbonara",
    description: "a pasta dish made with hard cheese",
    price: 20,
    amount: 0,
  },
  {
    id: "m3",
    name: "Kikliko",
    description: "Finest egg and bread",
    price: 5,
    amount: 0,
  },
  {
    id: "m4",
    name: "Khinkali",
    description:
      "dumpling made of twisted knobs of dough, stuffed with meat and spices.",
    price: 1.3,
    amount: 0,
  },
  {
    id: "m5",
    name: "Khachapuri",
    description: "bread stuffed with melting cheese",
    price: 15,
    amount: 0,
  },
];

const AvailableMeals = (props) => {
  const [addMeal, setAddMeal] = useState([]);

  const selectedMealHandler = (idOfMeal, quantity) => {
    listOfMeals.map((meal) => {
      if (idOfMeal == meal.id) {
        let newMeal = addMeal.find((meal) => meal.id == idOfMeal);
        if (newMeal) {
          newMeal.amount += quantity;
        } else {
          newMeal = { ...meal, amount: quantity };
        }
        const otherMeals = addMeal.filter((oldMeal) => oldMeal.id !== idOfMeal);

        setAddMeal([newMeal, ...otherMeals].filter((meal) => meal.amount > 0));
      }
    });
  };

  useEffect(() => {
    props.onAddedListOfMeals(addMeal);
  }, [addMeal]);

  const mealsList = listOfMeals.map((meal) => (
    <MealItem
      onAddMeal={selectedMealHandler}
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
