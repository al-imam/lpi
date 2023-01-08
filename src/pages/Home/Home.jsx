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
        <div className={classes.hero}>
          <h1 className={classes.heading}>
            Welcome to Lakshmipur polytechnic Institute
          </h1>
          <p className={classes.subtitle}>
            The Lakshmipur Polytechnic Institute in Lakshmipur, Bangladesh, was
            established in 2006. It is located near Lakshmipur Stadium
            baishmara. It is under BTEB. It contains about 5,000 students.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
