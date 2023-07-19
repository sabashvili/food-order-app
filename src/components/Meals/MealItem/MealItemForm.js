import { useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [mealQuantity, setMealQuantity] = useState(1);

  const inputChangeHandler = (e) => {
    setMealQuantity(Number(e.target.value));
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    props.onSelectedMeal(props.id, mealQuantity);
  };

  return (
    <form onSubmit={addItemHandler} className={classes.form}>
      <div className={classes.input}>
        <label className={classes.label}>Amount</label>
        <input
          onChange={inputChangeHandler}
          id={"amount_" + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
