import classes from "./departmentGroup.module.css";
import DepartmentCard from "./DepartmentCard/DepartmentCard";
import data from "./data";

function DepartmentGroup({ haveTitle = true }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {haveTitle && <h2 className={classes.departmentTitle}>Department's</h2>}
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
