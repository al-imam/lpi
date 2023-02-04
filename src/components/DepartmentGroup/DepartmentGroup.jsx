import classes from "./departmentGroup.module.css";
import DepartmentCard from "./DepartmentCard/DepartmentCard";
import data from "./data";

function DepartmentGroup() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.departmentTitle}>Our Deparments</h2>
        <div className={classes.cardsContainer}>
          {data.map((card, index) => (
            <DepartmentCard
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
