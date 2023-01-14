import classes from "./hero.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

function Hero({ title, subtitle, action }) {
  return (
    <section className={classes.heroContainer}>
      <div className={classes.hero}>
        <h1 className={classes.heading}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
        <NavLink className={classes.action} to="/about">
          {action} <ArrowForwardIcon />
        </NavLink>
      </div>
    </section>
  );
}

export default Hero;
