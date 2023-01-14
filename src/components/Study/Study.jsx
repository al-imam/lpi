import classes from "./study.module.css";
import { NavLink } from "react-router-dom";

function Study() {
  return (
    <div className={classes.studyContainer}>
      <img className={classes.image} src="assets/collage.jpg" alt="collage" />
      <div className={classes.info}>
        <h3 className={classes.title}>About LPI</h3>
        <p className={classes.subtitle}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <NavLink className={classes.link} to="/about">
          Learn more
        </NavLink>
      </div>
    </div>
  );
}

export default Study;
