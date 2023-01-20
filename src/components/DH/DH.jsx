import classes from "./dh.module.css";
import Teacher from "../Teacher/Teacher";

function DH({ data }) {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <div className={classes.studyContainer}>
          <img className={classes.image} src={data.src} alt="collage" />
          <div className={classes.info}>
            <h3 className={classes.title}>{data.name}</h3>
            <p className={classes.subtitle}>{data.description}</p>
          </div>
        </div>
        <div className={classes.group}>
          <Teacher info={data.firstShift} />
          {data.secondShift && <Teacher info={data.secondShift} />}
        </div>
      </div>
    </section>
  );
}

export default DH;
