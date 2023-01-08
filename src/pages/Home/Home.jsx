import classes from "./home.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          <h1 className={classes.heading}>
            Welcome to Lakshmipur Polytechnic Institute
          </h1>
          <p className={classes.subtitle}>
            The Lakshmipur Polytechnic Institute in Lakshmipur, Bangladesh, was
            established in 2006. It is located near Lakshmipur Stadium
            baishmara. It is under BTEB. It contains about 5,000 students.
          </p>
          <a className={classes.action} href="/about">
            Learn more <ArrowForwardIcon />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;
