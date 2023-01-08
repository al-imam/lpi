import classes from "./home.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";
import data from "./data";

function Home() {
  return (
    <main className={classes.main}>
      <img
        className={classes.backgroundImg}
        src="/assets/collage.jpg"
        alt="collage"
      />
      <div className={classes.heroContainer}>
        <div className={classes.hero}>
          <h1 className={classes.heading}>{data.title}</h1>
          <p className={classes.subtitle}>{data.subtitle}</p>
          <NavLink className={classes.action} to="/about">
            {data.action} <ArrowForwardIcon />
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Home;
