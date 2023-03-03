import { useState, useEffect, lazy, Suspense } from "react";
import Loader from "@components/Loader/Loader";
import Location from "@components/Location/Location";

const Gallery = lazy(() => import("@components/Gallery/Gallery"));
const Status = lazy(() => import("@components/Status/Status"));
const AboutUs = lazy(() => import("@components/AboutUs/AboutUs"));

function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    import("./data").then((v) => setData(v.default));
  }, []);

  return (
    <main>
      <Location current="About" />
      <Suspense fallback={<Loader />}>
        <AboutUs subtitle={data.about || []} />
        <Status />
        <Gallery pictures={data.gallery || []} heading="Image Gallery" />
      </Suspense>
    </main>
  );
}

export default About;
