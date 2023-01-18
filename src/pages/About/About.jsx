import { lazy, Suspense } from "react";
import classes from "./about.module.css";
import Location from "../../components/Location/Location";
import Study from "../../components/Study/Study";
import Status from "../../components/Status/Status";
import Loader from "../../components/Loader/Loader";
import data from "./data";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));

function About() {
  return (
    <div className={classes.aboutContainer + " main"}>
      <Location current="About" />
      <main className={classes.main}>
        <Study subtitle={data.about} direction="column" />
      </main>
      <Status />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </div>
  );
}

export default About;
