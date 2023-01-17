import classes from "./dh.module.css";
import Teacher from "../Teacher/Teacher";

function DH({ name, description }) {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
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
        <div className={classes.group}>
          <Teacher />
          <Teacher />
        </div>
      </div>
    </section>
  );
}

export default DH;
