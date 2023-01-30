import classes from "./teacher.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailLockIcon from "@mui/icons-material/MailLock";
import FacebookIcon from "@mui/icons-material/Facebook";

function Teacher({ info }) {
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
          <LocationOnIcon /> {info.address}
        </a>
        <a href={info.facebook} className={classes.address}>
          <FacebookIcon /> Facebook
        </a>
        <a href={`mailto:${info.gmail}`} className={classes.address}>
          <MailLockIcon /> Mail
        </a>
      </div>
    </div>
  );
}

export default Teacher;
