import classes from "./dh.module.css";

function DH({ name, description }) {
  return (
    <section className={classes.section}>
      <div className={classes.studyContainer}>
        <img
          className={classes.image}
          src="/assets/collage.jpg"
          alt="collage"
        />
        <div className={classes.info}>
          <h3 className={classes.title}>{name}</h3>
          <p className={classes.subtitle}>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default DH;
