import classes from "./department.module.css";
import Card from "../Card/Card";
import departments from "./data";

function Department() {
  return (
    <section className={classes.q}>
      <div className={classes.section}>
        <h2 className={classes.departmentTitle}>OUR DEPARTMENTS</h2>
        <div className={classes.cardsContainer}>
          {departments.map((card, index) => (
            <Card
              path={card.path}
              key={card.title + index}
              title={card.title}
              src={card.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Department;
