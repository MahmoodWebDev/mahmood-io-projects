import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Foods</h2>
      <p>You are welcome for lunch and dinner at our resturant.</p>
      <p>
        Our experienced chefs cooks high-quality dishes at <br></br>your demand
        or you can choose from the menu.
      </p>
    </section>
  );
};

export default MealsSummary;
