import classes from "./status.module.css";

function Status() {
  return (
    <section className={classes.status}>
      <div>
        <span>35</span>
        <span>Teacher</span>
      </div>
      <div>
        <span>12</span>
        <span>Instructor</span>
      </div>
      <div>
        <span>4000</span>
        <span>Student</span>
      </div>
      <div>
        <span>5</span>
        <span>Department</span>
      </div>
    </section>
  );
}

export default Status;
