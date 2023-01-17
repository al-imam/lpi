import classes from "./teacher.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Teacher() {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>
        <img src="/sir/sir.JPG" alt="sir" className={classes.image} />
        <div>
          <h4>Khaled shudon</h4>
          <span>Department Head</span>
        </div>
      </div>
      <div className={classes.info}>
        <a href="#" className={classes.address}>
          <LocationOnIcon /> Lakshmipur
        </a>
        <a href="#" className={classes.address}>
          <FacebookIcon /> Facebook
        </a>
        <a href="#" className={classes.address}>
          <LinkedInIcon /> Linkedin
        </a>
      </div>
    </div>
  );
}

export default Teacher;
