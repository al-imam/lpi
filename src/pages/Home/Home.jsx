import { lazy, Suspense } from "react";
import classes from "./home.module.css";
import Loader from "@components/Loader/Loader";
import Marquee from "@components/Marquee/Marquee";
import Hero from "./Hero/Hero";
import data from "./data";

const DepartmentGroup = lazy(function () {
  return import("@components/DepartmentGroup/DepartmentGroup");
});

const NoticeAndNews = lazy(function () {
  return import("@components/NoticeAndNews/NoticeAndNews");
});

const Subscribe = lazy(function () {
  return import("@components/Subscribe/Subscribe");
});

const Principal = lazy(function () {
  return import("@components/Principal/Principal");
});

const Gallery = lazy(function () {
  return import("@components/Gallery/Gallery");
});

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
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Principal />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <DepartmentGroup />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Subscribe />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Gallery pictures={data.gallery} heading="Image gallery" />
      </Suspense>
    </main>
  );
}

export default Home;
