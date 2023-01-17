import classes from "./departments.module.css";
import Card from "../Card/Card";
import departments from "./data";

function Departments() {
  return (
    <section className={classes.section}>
      <h2 className={classes.departmentTitle}>OUR DEPARTMENTS</h2>
      <div className={classes.cardsContainer}>
        {departments.map((card, index) => (
          <Card
            key={card.title + index}
            title={card.title}
            src={card.src}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </section>
  );
}

export default Departments;
