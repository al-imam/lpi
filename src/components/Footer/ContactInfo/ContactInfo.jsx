import { Mobile, Email, Location } from "@svg";
import classes from "./contactInfo.module.css";

function ContactInfo() {
  return (
    <div className={classes.footerContact}>
      <div className={classes.contact}>
        <Location />
        <div className={classes.contactInfo}>
          <h4 className={classes.infoHeading}>Find us</h4>
          <address className={classes.infoDescription}>
            Lakshmipur laharkandi
          </address>
        </div>
      </div>
      <div className={classes.contact}>
        <Mobile />
        <div className={classes.contactInfo}>
          <h4 className={classes.infoHeading}>Call us</h4>
          <a className={classes.infoDescription} href="tel:+8801881614926">
            +8801881614926
          </a>
        </div>
      </div>
      <div className={classes.contact}>
        <Email />
        <div className={classes.contactInfo}>
          <h4 className={classes.infoHeading}>Mail us</h4>
          <a
            className={classes.infoDescription}
            href="mailto:alimam01828@gmail.com"
          >
            alimam01828@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
