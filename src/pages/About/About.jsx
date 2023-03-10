import { lazy, Suspense } from "react";
import Location from "@components/Location/Location";
import AboutUs from "@components/AboutUs/AboutUs";
import Status from "@components/Status/Status";
import Loader from "@components/Loader/Loader";
import data from "./data";

const Gallery = lazy(() => import("@components/Gallery/Gallery"));

function About() {
  return (
    <main>
      <Location current="About" />
      <AboutUs subtitle={data.about} />
      <Status />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default About;
