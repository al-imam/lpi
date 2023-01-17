import classes from "./teacher.module.css";
import Teacher from "../Teacher/Teacher";

function Teachers() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Teachers</h2>
        <div className={classes.teachers}>
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
        </div>
      </div>
    </section>
  );
}

export default Teachers;
