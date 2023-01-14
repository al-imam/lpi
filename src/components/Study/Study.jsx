import classes from "./study.module.css";
import { NavLink } from "react-router-dom";

function Study() {
  return (
    <div className={classes.studyContainer}>
      <div className={classes.image}>
        <img src="assets/collage.jpg" alt="collage" />
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>About LPI</h3>
        <p className={classes.subtitle}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text amr
          songr balga ami toami valo lasi ciri din akr dali
        </p>
        <NavLink className={classes.link} to="/about">
          Learn Now
        </NavLink>
      </div>
    </div>
  );
}

export default Study;
