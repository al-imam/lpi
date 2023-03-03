import { lazy, Suspense } from "react";
import data from "./data";
import Loader from "@components/Loader/Loader";
import Location from "@components/Location/Location";

const Gallery = lazy(() => import("@components/Gallery/Gallery"));
const Status = lazy(() => import("@components/Status/Status"));
const AboutUs = lazy(() => import("@components/AboutUs/AboutUs"));

function About() {
  return (
    <main>
      <Location current="About" />
      <Suspense fallback={<Loader />}>
        <AboutUs subtitle={data.about} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Status />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default About;
