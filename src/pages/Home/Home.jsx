import classes from "./home.module.css";

function Home() {
  return (
    <main>
      <div className={classes.heroContainer}>
        <img
          className={classes.backgroundImg}
          src="/assets/collage.jpg"
          alt="collage"
        />
      </div>
    </main>
  );
}

export default Home;
