import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const listOfMeals = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 25 },
  { id: "m2", name: "Carbonara", description: "a pasta dish made with hard cheese", price: 20 },
  { id: "m3", name: "Kikliko", description: "Finest egg and bread", price: 5 },
  { id: "m4", name: "Khinkali", description: "dumpling made of twisted knobs of dough, stuffed with meat and spices.", price: 1.3 },
  { id: "m5", name: "Khachapuri", description: "bread stuffed with melting cheese", price: 15 },
];

const AvailableMeals = () => {
  const mealsList = listOfMeals.map((meal) => <MealItem id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
