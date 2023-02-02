import classes from "./principal.module.css";
import { Email, Location, FacebookOutlineIcon } from "@svg";

const head = {
  name: "Jahirul Islam",
  pod: "Principle Lakshmipur Polytechnic",
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
                </div>
                <div className={classes.social}>
                  <address className={classes.location}>
                    <Location /> {head.location}
                  </address>
                  <a href="https://www.facebook.com/profile.php?id=100023528615846">
                    <FacebookOutlineIcon /> Facebook
                  </a>
                  <a href="mailto:">
                    <Email /> Mail
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
                    <Location /> {atik.location}
                  </address>
                  <a href="https://www.facebook.com/profile.php?id=100007141004066">
                    <FacebookOutlineIcon /> Facebook
                  </a>
                  <a href="mailto:">
                    <Email /> Mail
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
