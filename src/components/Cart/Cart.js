import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import { UserContext } from "../../App";

const Cart = () => {
  const context = useContext(UserContext);

  const cartCloseHandler = () => {
    context.cartShownButton(false);
  };

  return (
    <Modal onClose={cartCloseHandler}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$0.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={cartCloseHandler}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
