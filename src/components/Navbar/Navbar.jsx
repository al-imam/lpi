import classes from "./navbar.module.css";
import { ArrowDown } from "@svg";
import { useNavigate, NavLink } from "react-router-dom";

import data from "./data";
import { useState } from "react";

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

const init = {
  hover: false,
  focus: false,
};

function DropDownMenu({ root }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(init);

  return (
    <li
      className={classes.navItem}
      onMouseEnter={() => setIsOpen({ ...isOpen, hover: true })}
      onMouseLeave={() => setIsOpen({ ...isOpen, hover: false })}
      onFocus={() => setIsOpen({ hover: false, focus: true })}
      onBlur={() => setIsOpen({ hover: false, focus: false })}
    >
      <button
        className={classes.dropdownToggler}
        onClick={() => navigate(root.path)}
      >
        {root.text} <ArrowDown />
      </button>
      <DropDown routes={root.routes} isOpen={isOpen} setIsOpen={setIsOpen} />
    </li>
  );
}

function DropDown({ routes, isOpen, setIsOpen }) {
  return (
    <ul
      className={`${classes.dropdownMenu} ${
        isOpen.hover || isOpen.focus ? classes.showMenu : ""
      }`}
    >
      {routes.map((el) => (
        <DeepLi
          path={el.path}
          text={el.text}
          key={el.text}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
}

function DeepLi({ text, path, setIsOpen }) {
  return (
    <li onClick={() => setIsOpen({ hover: false, focus: false })}>
      <NavLink to={path}>{text}</NavLink>
    </li>
  );
}
