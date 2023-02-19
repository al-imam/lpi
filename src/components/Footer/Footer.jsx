import ContactInfo from "./ContactInfo/ContactInfo";

import { LinkIcon, FacebookIcon, LinkedinIcon, GithubIcon } from "@svg";

import classes from "./footer.module.css";
import logo from "/assets/logo_.svg";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={classes.footerSection}>
      <div className={classes.container}>
        <ContactInfo />
        <div className={classes.footerLinks}>
          <h4 className={classes.linkHeading}>
            Useful Links <LinkIcon />
          </h4>
          <ul className={classes.linkItems}>
            <li className={classes.linkItem}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/contact">Complain</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/departments">Departments</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li className={classes.linkItem}>
              <NavLink to="/admin/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.footerLogo}>
          <NavLink to="/" className={classes.logoImage}>
            <img src={logo} alt="logo" />
          </NavLink>
          <p className={classes.logoDescription}>
            The Lakshmipur Polytechnic Institute in Lakshmipur, Bangladesh, was
            established in 2006. It is located near Lakshmipur Stadium baishmara
          </p>
        </div>

        <div className={classes.footerSocial}>
          <h4 className={classes.socialHeading}>Follow us</h4>
          <ul className={classes.socialItems}>
            <li>
              <a
                href="https://github.com/al-imam"
                className={classes.socialItem}
              >
                <GithubIcon />
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alimam"
                className={classes.socialItem}
              >
                <LinkedinIcon />
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/alimam.nirob"
                className={classes.socialItem}
              >
                <FacebookIcon />
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <p className={classes.footerCopyRight}>
          Copyright © 2023, All Right Reserved
          <a href="https://github.com/al-imam/">Al-Imam</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
