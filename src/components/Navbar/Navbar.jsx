import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { ArrowDown } from "@svg";
import { useNavigate } from "react-router-dom";

function Navbar({ open }) {
  const navigate = useNavigate();

  return (
    <nav className={`${classes.navbar} ${open ? classes.open : ""}`}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem + " " + classes.active}>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className={classes.navItem}>
          <button
            className={classes.dropdownToggler}
            onClick={() => navigate("/departments")}
          >
            Department <ArrowDown />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="/departments/computer-technology">
                Computer Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/electrical-technology">
                Electrical Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/civil-technology">
                Civil Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/electronics-technology">
                Electronics Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/architecture-technology">
                Architecture Technology
              </NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Syllabus <ArrowDown />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="/syllabus/computer">Computer Syllabus</NavLink>
            </li>
            <li>
              <NavLink to="/syllabus/civil">Civil Syllabus</NavLink>
            </li>
            <li>
              <NavLink to="/syllabus/electrical">Electrical Syllabus</NavLink>
            </li>
            <li>
              <NavLink to="/syllabus/architecture">
                Architecture Syllabus
              </NavLink>
            </li>
            <li>
              <NavLink to="/syllabus/electronics">Electronics Syllabus</NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <button className={classes.dropdownToggler}>
            Facilities <ArrowDown />
          </button>
          <ul className={classes.dropdownMenu}>
            <li>
              <NavLink to="/facilities/modern-lab">Modern Lab</NavLink>
            </li>
            <li>
              <NavLink to="/facilities/open-library">Open Library</NavLink>
            </li>
          </ul>
        </li>

        <li className={classes.navItem}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        <li className={classes.navItem}>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
