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
    <main>
      <Location current="About" />
      <Study subtitle={data.about} direction="column" />
      <Status />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default About;
