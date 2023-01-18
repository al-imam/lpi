import classes from "./study.module.css";
import { NavLink } from "react-router-dom";

function Study({ subtitle, link, direction = "row" }) {
  return (
    <section className={classes.section}>
      <div className={classes.container + " " + classes[direction]}>
        <img
          className={classes.image}
          src="/assets/collage.jpg"
          alt="collage"
        />
        <div className={classes.info}>
          <h3 className={classes.title}>About LPI</h3>
          <p className={classes.subtitle}>{subtitle}</p>
          {link ? (
            <NavLink className={classes.link} to="/about">
              Learn more
            </NavLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Study;
