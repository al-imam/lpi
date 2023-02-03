import classes from "./aboutUs.module.css";
import { NavLink } from "react-router-dom";

function AboutUs({ subtitle }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <img className={classes.image} src="/assets/main.jpg" alt="collage" />
        <div className={classes.info}>
          <h3 className={classes.title}>About LPI</h3>
          <p className={classes.subtitle}>
            {subtitle.map((el) => (
              <span>{el}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
