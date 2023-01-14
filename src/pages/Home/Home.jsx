import Departments from "../../components/Departments/Departments";
import classes from "./home.module.css";
import data from "./data";
import Study from "../../components/Study/Study";
import Hero from "./Hero/Hero";

function Home() {
  return (
    <main className={classes.main + " main"}>
      <img
        className={classes.backgroundImg}
        src="/assets/collage.jpg"
        alt="collage"
      />

      <Hero title={data.title} subtitle={data.subtitle} action={data.action} />
      <Study />
      <Departments />
    </main>
  );
}

export default Home;
