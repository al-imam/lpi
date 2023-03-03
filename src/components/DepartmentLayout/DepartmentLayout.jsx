import { lazy } from "react";
import classes from "./departmentLayout.module.css";
const DepartmentHead = lazy(() =>
  import("@components/DepartmentHead/DepartmentHead")
);

function DepartmentLayout({ data }) {
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
          <DepartmentHead info={data.firstShift} />
          {data.secondShift && <DepartmentHead info={data.secondShift} />}
        </div>
      </div>
    </section>
  );
}

export default DepartmentLayout;
