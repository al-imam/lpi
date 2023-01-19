import classes from "./teacher.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          <span>Department Head</span>
        </div>
      </div>
      <div className={classes.info}>
        <a href="#" className={classes.address}>
          <LocationOnIcon /> {info.address}
        </a>
        <a href={info.facebook} className={classes.address}>
          <FacebookIcon /> Facebook
        </a>
        <a href={info.gmail} className={classes.address}>
          <LinkedInIcon /> Linkedin
        </a>
      </div>
    </div>
  );
}

export default Teacher;
