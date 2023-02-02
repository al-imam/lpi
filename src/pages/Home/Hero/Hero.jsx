import classes from "./hero.module.css";
import { ArrowRight } from "@svg";
import { NavLink } from "react-router-dom";
import data from "./data";

function Hero() {
  return (
    <section className={classes.section}>
      <div className={classes.heroContainer}>
        <div className={classes.hero}>
          <h1 className={classes.heading}>{data.title}</h1>
          <p className={classes.subtitle}>{data.subtitle}</p>
          <NavLink className={classes.action} to="/about">
            {data.action} <ArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
