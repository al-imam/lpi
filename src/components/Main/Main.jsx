import classes from "./main.module.css";
import MailLockIcon from "@mui/icons-material/MailLock";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Main() {
  return (
    <section className={classes.main}>
      <div className={classes.content}>
        <div className={classes.card}>
          <div className={classes.cardContainer}>
            <img src="/Non-tech/sir/principal-sir.jpg" />
            <div className={classes.info}>
              <div className={classes.heading}>
                <h4>Mohammad Alauddin</h4>
                <span className={classes.title}>Principal</span>
              </div>
              <div className={classes.social}>
                <address className={classes.location}>
                  <LocationOnIcon /> comilla, comilla sadar
                </address>
                <a href="#" className={classes.address}>
                  <FacebookIcon /> Facebook
                </a>
                <a href="#" className={classes.address}>
                  <MailLockIcon /> Mail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardContainer}>
            <img src="/public/Non-tech/sir/atik-sir.JPG" />
            <div className={classes.info}>
              <div className={classes.heading}>
                <h4>Mohammad Alauddin</h4>
                <span className={classes.title}>Principal</span>
              </div>
              <div className={classes.social}>
                <address className={classes.location}>
                  <LocationOnIcon /> comilla, comilla sadar
                </address>
                <a href="#" className={classes.address}>
                  <FacebookIcon /> Facebook
                </a>
                <a href="#" className={classes.address}>
                  <MailLockIcon /> Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
