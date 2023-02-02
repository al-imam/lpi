import classes from "./DepartmentHead.module.css";
import { Email, FacebookOutlineIcon, Location } from "@svg";

function DepartmentHead({ info }) {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <img
          src={info.src}
          alt="sir"
          className={classes.image}
          onError={(evt) => (evt.target.src = "/sir/fallback.jpg")}
        />
        <div>
          <h4>{info.name}</h4>
          <span>{info.head ? info.head : "Department Head"}</span>
        </div>
      </div>
      <div className={classes.info}>
        <a href="#" className={classes.address}>
          <Location /> {info.address}
        </a>
        <a href={info.facebook} className={classes.address}>
          <FacebookOutlineIcon /> Facebook
        </a>
        <a href={`mailto:${info.gmail}`} className={classes.address}>
          <Email /> Mail
        </a>
      </div>
    </div>
  );
}

export default DepartmentHead;
