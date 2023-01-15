import classes from "./about.module.css";
import Location from "../../components/Location/Location";
import Study from "../../components/Study/Study";

function About() {
  return (
    <div className={classes.aboutContainer}>
      <Location current="About" />
      <main className={classes.main}>
        <Study />
      </main>
    </div>
  );
}

export default About;
