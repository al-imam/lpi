import classes from "./departmentGroup.module.css";
import Card from "../Card/Card";
import data from "./data";

function DepartmentGroup() {
  return (
    <section className={classes.q}>
      <div className={classes.section}>
        <h2 className={classes.departmentTitle}>OUR DEPARTMENTS</h2>
        <div className={classes.cardsContainer}>
          {data.map((card, index) => (
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

export default DepartmentGroup;
