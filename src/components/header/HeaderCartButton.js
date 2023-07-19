import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const HeaderCartButton = () => {
  const context = useContext(UserContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const headerButtonHandler = () => {
    context.cartShownButton(true);
  };

  useEffect(() => {
    setBtnIsHighlighted(true);
    setTimeout(() => setBtnIsHighlighted(false), 200);
  }, [context.cartNumberOfItem]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={headerButtonHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{context.cartNumberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
