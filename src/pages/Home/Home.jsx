import { lazy, Suspense } from "react";
import classes from "./home.module.css";

import DepartmentGroup from "@components/DepartmentGroup/DepartmentGroup";
import Loader from "@components/Loader/Loader";
import Marquee from "@components/Marquee/Marquee";
import NoticeAndNews from "@components/NoticeAndNews/NoticeAndNews";
import Principal from "@components/Principal/Principal";
import Subscribe from "@components/Subscribe/Subscribe";
import data from "./data";
import Hero from "./Hero/Hero";

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
      <NoticeAndNews />
      <Principal />
      <DepartmentGroup />
      <Subscribe />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image gallery" />
      </Suspense>
    </main>
  );
}

export default Home;
