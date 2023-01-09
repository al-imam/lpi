import classes from "./home.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";
import data from "./data";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <main className={classes.main}>
      <img
        className={classes.backgroundImg}
        src="/assets/collage.jpg"
        alt="collage"
      />
      <section className={classes.heroContainer}>
        <div className={classes.hero}>
          <h1 className={classes.heading}>{data.title}</h1>
          <p className={classes.subtitle}>{data.subtitle}</p>
          <NavLink className={classes.action} to="/about">
            {data.action} <ArrowForwardIcon />
          </NavLink>
        </div>
      </section>
      <section className={classes.ourDepartment}>
        <h2 className={classes.departmentTitle}>Our departments</h2>
        <div className={classes.cardsContainer}>
          {data.cards.map((card, index) => (
            <Card
              key={card.title + index}
              title={card.title}
              src={card.src}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
