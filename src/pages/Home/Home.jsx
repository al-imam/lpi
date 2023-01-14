import Departments from "../../components/Departments/Departments";
import classes from "./home.module.css";
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
      <Hero />
      <Study />
      <Departments />
    </main>
  );
}

export default Home;
