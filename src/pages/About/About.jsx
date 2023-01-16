import { lazy, Suspense } from "react";
import classes from "./about.module.css";
import Location from "../../components/Location/Location";
import Study from "../../components/Study/Study";
import Status from "../../components/Status/Status";
// import Gallery from "../../components/Gallery/Gallery";
import data from "./data";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));

function About() {
  return (
    <div className={classes.aboutContainer}>
      <Location current="About" />
      <main className={classes.main}>
        <Study subtitle={data.about} />
      </main>
      <Status />
      <Suspense fallback={<p>Loading...</p>}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </div>
  );
}

export default About;
