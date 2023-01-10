import ContactInfo from "./ContactInfo/ContactInfo";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";

import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerSection}>
      <div className={classes.container}>
        <ContactInfo />
        <div className={classes.footerLogo}>
          <a href="/" className={classes.logoImage}>
            <img src="/assets/lpi.png" alt="logo" />
          </a>
          <p className={classes.logoDescription}>
            The Lakshmipur Polytechnic Institute in Lakshmipur, Bangladesh, was
            established in 2006. It is located near Lakshmipur Stadium baishmara
          </p>
        </div>
        <div className={classes.footerSocial}>
          <h4 className={classes.socialHeading}>Follow us</h4>
          <ul className={classes.socialItems}>
            <li>
              <a href="#" className={classes.socialItem}>
                <GitHubIcon />
                Github
              </a>
            </li>
            <li>
              <a href="#" className={classes.socialItem}>
                <LinkedInIcon />
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className={classes.socialItem}>
                <FacebookIcon />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footerLinks}>
          <h4 className={classes.linksHeading}>
            Useful Links <LinkIcon />
          </h4>
          <ul className={classes.linkItems}>
            <li className={classes.linkItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.linkItem}>
              <a href="#">About</a>
            </li>
            <li className={classes.linkItem}>
              <a href="#">Complain</a>
            </li>
            <li className={classes.linkItem}>
              <a href="#">Departments</a>
            </li>
            <li className={classes.linkItem}>
              <a href="#">Contact</a>
            </li>
            <li className={classes.linkItem}>
              <a href="#">LPI Clubs</a>
            </li>
          </ul>
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
