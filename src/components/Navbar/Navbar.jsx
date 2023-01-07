import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar({ open }) {
  return (
    <nav className={`${classes.navbar} ${open ? classes.open : ""}`}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem + " " + classes.active}>
          <Link to="/">Home</Link>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Department <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="department/computer-technology">
                Computer Technology
              </Link>
            </li>
            <li>
              <Link to="department/electrical-technology">
                Electrical Technology
              </Link>
            </li>
            <li>
              <Link to="department/civil-technology">Civil Technology</Link>
            </li>
            <li>
              <Link to="department/electronics-technology">
                Electronics Technology
              </Link>
            </li>
            <li>
              <Link to="department/architecture-technology">
                Architecture Technology
              </Link>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Syllabus <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="syllabus/computer">Computer Engineering Syllabus</Link>
            </li>
            <li>
              <Link to="syllabus/civil">Civil Engineering Syllabus</Link>
            </li>
            <li>
              <Link to="syllabus/electrical">
                Electrical Engineering Syllabus
              </Link>
            </li>
            <li>
              <Link to="syllabus/architecture">
                Architecture Engineering Syllabus
              </Link>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Facilities <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="facilities/modern-lab">Modern Lab</Link>
            </li>
            <li>
              <Link to="facilities/open-library">Open Library</Link>
            </li>
            <li>
              <Link to="facilities/duet-admission">DUET Admission</Link>
            </li>
            <li>
              <Link to="facilities/free-internet">Free Internet</Link>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            LPI Clubs
            <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <Link to="clubs/robotic">Robotic Club</Link>
            </li>
            <li>
              <Link to="clubs/programming">LPI Programming Club</Link>
            </li>
            <li>
              <Link to="clubs/debating">LPDS Debating Club</Link>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <Link to="about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
