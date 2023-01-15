import classes from "./about.module.css";
import Map from "../../components/Map/Map";
import Location from "../../components/Location/Location";

function About() {
  return (
    <div className={classes.aboutContainer}>
      <Location />
      {/* <main className={classes.main}><Map /></main> */}
    </div>
  );
}

export default About;
