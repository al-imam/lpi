import Location from "@components/Location/Location";
import AboutUs from "@components/AboutUs/AboutUs";
import Status from "@components/Status/Status";
import data from "./data";
import Gallery from "@components/Gallery/Gallery";

function About() {
  return (
    <main>
      <Location current="About" />
      <AboutUs subtitle={data.about} />
      <Status />
      <Gallery pictures={data.gallery} heading="Image Gallery" />
    </main>
  );
}

export default About;
