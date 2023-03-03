import { useState, useEffect, lazy } from "react";
const Location = lazy(() => import("@components/Location/Location"));
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
      <AboutUs subtitle={data.about || []} />
      <Status />
      <Gallery pictures={data.gallery || []} heading="Image Gallery" />
    </main>
  );
}

export default About;
