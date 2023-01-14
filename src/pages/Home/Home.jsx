import classes from "./home.module.css";
import data from "./data";
import Card from "../../components/Card/Card";
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
      <section className={classes.section}>
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
