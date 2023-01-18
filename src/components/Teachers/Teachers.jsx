import classes from "./teacher.module.css";
import Teacher from "../Teacher/Teacher";

function Teachers() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Teachers</h2>
        <div className={classes.teachers}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className={classes.card}>
      <img
        srcSet=""
        style={{ maxWidth: "100%" }}
        src="/sir/maruf-sir.JPG"
        alt=""
      />
      <p className={classes.info}>
        <h4>maruf hussein</h4>
        <span>naishmara, lakshmipur</span>
      </p>
    </div>
  );
}

export default Teachers;
