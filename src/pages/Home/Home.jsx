import { lazy, Suspense } from "react";
import classes from "./home.module.css";
const Loader = lazy(() => import("@components/Loader/Loader"));
const Marquee = lazy(() => import("@components/Marquee/Marquee"));
const Hero = lazy(() => import("./Hero/Hero"));
import data from "./data";

const DepartmentGroup = lazy(() =>
  import("@components/DepartmentGroup/DepartmentGroup")
);
const NoticeAndNews = lazy(() =>
  import("@components/NoticeAndNews/NoticeAndNews")
);
const Subscribe = lazy(() => import("@components/Subscribe/Subscribe"));
const Principal = lazy(() => import("@components/Principal/Principal"));
const Gallery = lazy(() => import("@components/Gallery/Gallery"));

function Home() {
  return (
    <main className={classes.main}>
      <img
        className={classes.backgroundImg}
        src="/assets/main.jpg"
        alt="collage"
      />
      <Hero />
      <Marquee />
      <Suspense fallback={<Loader />}>
        <NoticeAndNews />
        <Principal />
        <DepartmentGroup />
        <Subscribe />
        <Gallery pictures={data.gallery} heading="Image gallery" />
      </Suspense>
    </main>
  );
}

export default Home;
