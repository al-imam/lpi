import classes from "./study.module.css";
import { NavLink } from "react-router-dom";
import data from "./data";

function Study() {
  return (
    <section className={classes.section}>
      <div className={classes.studyContainer}>
        <img className={classes.image} src={data.src} alt="collage" />
        <div className={classes.info}>
          <h3 className={classes.title}>About LPI</h3>
          <p className={classes.subtitle}>{data.subtitle}</p>
          <NavLink className={classes.link} to="/about">
            Learn more
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Study;
