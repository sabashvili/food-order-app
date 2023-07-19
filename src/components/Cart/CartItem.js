import { useContext } from "react";
import { UserContext } from "../../App";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const context = useContext(UserContext);

  const decreaseClickHandler = () => {
    // const currElementIndex = context.listOfAddedMealItems.findIndex(
    //   (meal) => meal.id == props.id
    // );
    // context.listOfAddedMealItems[currElementIndex].amount--;
    context.decrIncrAmount(props.id, "decrease");
  };

  const increaseClickHandler = () => {
    context.decrIncrAmount(props.id, "increase");
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>GEL {props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseClickHandler}>−</button>
        <button onClick={increaseClickHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
