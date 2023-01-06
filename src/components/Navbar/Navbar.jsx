import classes from "./navbar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar({ open }) {
  return (
    <nav className={`${classes.navbar} ${open ? classes.open : classes.close}`}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem + " " + classes.active}>
          <a href="#">Home</a>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Department <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <a href="#">Computer Technology</a>
            </li>
            <li>
              <a href="#">Electrical Technology</a>
            </li>
            <li>
              <a href="#">Civil Technology</a>
            </li>
            <li>
              <a href="#">Electronics Technology</a>
            </li>
            <li>
              <a href="#">Architecture Technology</a>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Syllabus <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <a href="#">Computer Engineering Syllabus</a>
            </li>
            <li>
              <a href="#">Civil Engineering Syllabus</a>
            </li>
            <li>
              <a href="#">Electrical Engineering Syllabus</a>
            </li>
            <li>
              <a href="#">Architecture Engineering Syllabus</a>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Facilities <ExpandMoreIcon />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <a href="#">Modern Lab</a>
            </li>
            <li>
              <a href="#">Open Library</a>
            </li>
            <li>
              <a href="#">DUET Admission</a>
            </li>
            <li>
              <a href="#">Free Internet</a>
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
              <a href="#">Robotic Club</a>
            </li>
            <li>
              <a href="#">LPI programming club</a>
            </li>
            <li>
              <a href="#">LPDS Debating Club</a>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <a href="#">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
