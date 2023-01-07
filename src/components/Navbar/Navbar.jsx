import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar({ open }) {
  return (
    <nav className={`${classes.navbar} ${open ? classes.open : ""}`}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem + " " + classes.active}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Department <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="department/computer-technology">
                Computer Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="department/electrical-technology">
                Electrical Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="department/civil-technology">
                Civil Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="department/electronics-technology">
                Electronics Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="department/architecture-technology">
                Architecture Technology
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Syllabus <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="syllabus/computer">
                Computer Engineering Syllabus
              </NavLink>
            </li>
            <li>
              <NavLink to="syllabus/civil">Civil Engineering Syllabus</NavLink>
            </li>
            <li>
              <NavLink to="syllabus/electrical">
                Electrical Engineering Syllabus
              </NavLink>
            </li>
            <li>
              <NavLink to="syllabus/architecture">
                Architecture Engineering Syllabus
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Facilities <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="facilities/modern-lab">Modern Lab</NavLink>
            </li>
            <li>
              <NavLink to="facilities/open-library">Open Library</NavLink>
            </li>
            <li>
              <NavLink to="facilities/duet-admission">DUET Admission</NavLink>
            </li>
            <li>
              <NavLink to="facilities/free-internet">Free Internet</NavLink>
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
              <NavLink to="clubs/robotic">Robotic Club</NavLink>
            </li>
            <li>
              <NavLink to="clubs/programming">LPI Programming Club</NavLink>
            </li>
            <li>
              <NavLink to="clubs/debating">LPDS Debating Club</NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <NavLink to="about">About us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
