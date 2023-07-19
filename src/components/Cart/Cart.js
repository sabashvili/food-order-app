import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { UserContext } from "../../App";
import CartItem from "./CartItem";

const Cart = () => {
  const context = useContext(UserContext);
  const hasItems = context.listOfAddedMealItems.length > 0;
  const cartCloseHandler = () => {
    context.cartShownButton(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.listOfAddedMealItems
        .sort((el1, el2) => el1.id[1] - el2.id[1])
        .map((mealItem) => (
          <CartItem
            key={mealItem.id}
            name={mealItem.name}
            price={mealItem.price}
            amount={mealItem.amount}
            id={mealItem.id}
          />
        ))}
    </ul>
  );

  const TotalAmountValue = context.listOfAddedMealItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.amount,
    0
  );

  return (
    <Modal onClose={cartCloseHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>GEL {TotalAmountValue}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={cartCloseHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
