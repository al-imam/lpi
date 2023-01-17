import { lazy, Suspense } from "react";

import Department from "../../components/Department/Department";
import classes from "./home.module.css";
import Study from "../../components/Study/Study";
import Hero from "./Hero/Hero";
import data from "./data";
import Loader from "../../components/Loader/Loader";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));

function Home() {
  return (
    <main className={classes.main + " main"}>
      <img
        className={classes.backgroundImg}
        src="/assets/collage.jpg"
        alt="collage"
      />
      <Hero />
      <Study subtitle={data.about} link={true} />
      <Department />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default Home;
