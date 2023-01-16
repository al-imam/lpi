import classes from "./about.module.css";
import Location from "../../components/Location/Location";
import Study from "../../components/Study/Study";
import Status from "../../components/Status/Status";
import Gallery from "../../components/Gallery/Gallery";
import pictures from "./data";

function About() {
  return (
    <div className={classes.aboutContainer}>
      <Location current="About" />
      <main className={classes.main}>
        <Study />
      </main>
      <Status />
      <Gallery pictures={pictures} heading="Image Gallery" />
    </div>
  );
}

export default About;
