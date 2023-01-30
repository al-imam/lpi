import { lazy, Suspense } from "react";

import DepartmentGroup from "../../components/DepartmentGroup/DepartmentGroup";
import classes from "./home.module.css";
import Study from "../../components/Study/Study";
import Hero from "./Hero/Hero";
import data from "./data";
import Loader from "../../components/Loader/Loader";
import Principal from "../../components/Principal/Principal";
import Subscribe from "../../components/Subscribe/Subscribe";
import Marquee from "../../components/Marquee/Marquee";
import NoticeAndNews from "../../components/NoticeAndNews/NoticeAndNews";

const Gallery = lazy(() => import("../../components/Gallery/Gallery"));

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
      <Principal />
      <NoticeAndNews />
      <Study subtitle={data.about} link={true} />
      <DepartmentGroup />
      <Subscribe />
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default Home;
