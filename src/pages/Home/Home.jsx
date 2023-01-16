import Departments from "../../components/Departments/Departments";
import classes from "./home.module.css";
import Study from "../../components/Study/Study";
import Hero from "./Hero/Hero";
import data from "./data";

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
      <Departments />
    </main>
  );
}

export default Home;
