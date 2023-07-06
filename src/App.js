import { Fragment } from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
