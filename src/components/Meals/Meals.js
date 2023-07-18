import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  const curListOfMeals = (meal) => {
    props.onFinalListOfMeal(meal);
  };

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals onAddedListOfMeals={curListOfMeals} />
    </Fragment>
  );
};

export default Meals;
