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
