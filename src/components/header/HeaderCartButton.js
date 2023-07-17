import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import { UserContext } from "../../App";

const HeaderCartButton = () => {
  const context = useContext(UserContext);

  const headerButtonHandler = () => {
    context.cartShownButton(true);
  };

  return (
    <button className={classes.button} onClick={headerButtonHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{context.cartNumberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
