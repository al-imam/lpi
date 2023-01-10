import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailLockIcon from "@mui/icons-material/MailLock";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";

import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerSection}>
      <div className={classes.container}>
        <div>
          <div className={classes.footerContact}>
            <LocationOnIcon />
            <div className={classes.contactInfo}>
              <h4 className={classes.infoHeading}>Find us</h4>
              <address className={classes.infoDescription}>
                132554 Laharkandi, Lakshmipur, Chittagong
              </address>
            </div>
          </div>
          <div>
            <PhonelinkLockIcon />
            <div>
              <h4>Call us</h4>
              <a href="tel:+8801881614926">+8801881614926</a>
            </div>
          </div>
          <div>
            <MailLockIcon />
            <div className="cta-text">
              <h4>Mail us</h4>
              <a href="mailto:alimam01828@gmail.com">alimam01828@gmail.com</a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a href="#">
              <img src="/assets/lpi.png" alt="logo" />
            </a>
            <p>Lakshmipur polytechnic institute</p>
          </div>
          <div className="footer-social-icon">
            <h3>Follow us</h3>
            <a href="#">
              <GitHubIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
          </div>
          <div>
            <h3>
              Useful Links <LinkIcon />
            </h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Complain</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">LPI Clubs</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Copyright © 2018, All Right Reserved
          <a href="https://github.com/al-imam/"> Al-Imam</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
