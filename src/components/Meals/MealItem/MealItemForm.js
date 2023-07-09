import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label className={classes.label}>Amount</label>
        <input id={"amount_" + props.id} type="number" min="1" max="5" step="1" defaultValue="1" />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
