import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const selectedMealHandler = (mealId, quantity) => {
    props.onAddMeal(mealId, quantity);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>Gel {props.price}</div>
      </div>
      <div>
        <MealItemForm onSelectedMeal={selectedMealHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
