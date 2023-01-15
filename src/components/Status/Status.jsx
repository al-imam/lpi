import classes from "./status.module.css";

function Status() {
  return (
    <section className={classes.status}>
      <div className={classes.container}>
        <div className={classes.group}>
          <span>35 +</span>
          <span>Teacher</span>
        </div>
        <div className={classes.group}>
          <span>12 +</span>
          <span>Instructor</span>
        </div>
        <div className={classes.group}>
          <span>4000 +</span>
          <span>Student</span>
        </div>
        <div className={classes.group}>
          <span>5</span>
          <span>Department</span>
        </div>
      </div>
    </section>
  );
}

export default Status;
