import classes from "./navbar.module.css";
import { ArrowDown } from "@svg";
import { useNavigate, NavLink } from "react-router-dom";

import data from "./data";

function Navbar({ open }) {
  return (
    <nav className={`${classes.navbar} ${open ? classes.open : ""}`}>
      <ul className={classes.navbarNav}>
        <li className={classes.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>

        {data.dropdown.map((el) => (
          <DropDownMenu root={el} key={el.text} />
        ))}

        {/* <li className={classes.navItem}>
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
        </li> */}

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

function DropDownMenu({ root }) {
  const navigate = useNavigate();

  return (
    <li className={classes.navItem}>
      <button
        className={classes.dropdownToggler}
        onClick={() => navigate(root.path)}
      >
        {root.text} <ArrowDown />
      </button>
      <DropDown routes={root.routes} />
    </li>
  );
}

function DropDown({ routes }) {
  return (
    <ul className={classes.dropdownMenu}>
      {routes.map((el) => (
        <DeepLi path={el.path} text={el.text} key={el.text} />
      ))}
    </ul>
  );
}

function DeepLi({ text, path }) {
  return (
    <li>
      <NavLink to={path}>{text}</NavLink>
    </li>
  );
}
