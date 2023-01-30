import classes from "./principal.module.css";
import MailLockIcon from "@mui/icons-material/MailLock";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const head = {
  name: "MD Jahirul Islam",
  pod: "CIA Deputy Director At BTEB",
  pod2: "Principle Lakshmipur Polytechnic",
  location: "Comilla, Bangladesh",
};

const atik = {
  name: "Atiqure Rahman",
  pod: "Chief Instructor Non-Tech",
  location: "Fenchugonj, Sylhet",
};

function Principal() {
  return (
    <section className={classes.section}>
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.card}>
            <div className={classes.cardContainer}>
              <img src="/Non-tech/sir/principal-sir.jpg" />
              <div className={classes.info}>
                <div className={classes.heading}>
                  <h4>{head.name}</h4>
                  <span className={classes.title}>{head.pod}</span>
                  <span className={classes.title + " " + classes.a2}>
                    {head.pod2}
                  </span>
                </div>
                <div className={classes.social}>
                  <address className={classes.location}>
                    <LocationOnIcon /> {head.location}
                  </address>
                  <a href="https://www.facebook.com/profile.php?id=100023528615846">
                    <FacebookIcon /> Facebook
                  </a>
                  <a href="mailto:">
                    <MailLockIcon /> Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardContainer}>
              <img src="/Non-tech/sir/atik-sir.JPG" />
              <div className={classes.info}>
                <div className={classes.heading}>
                  <h4>{atik.name}</h4>
                  <span className={classes.title}>{atik.pod}</span>
                </div>
                <div className={classes.social}>
                  <address className={classes.location}>
                    <LocationOnIcon /> {atik.location}
                  </address>
                  <a href="https://www.facebook.com/profile.php?id=100007141004066">
                    <FacebookIcon /> Facebook
                  </a>
                  <a href="mailto:">
                    <MailLockIcon /> Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;
