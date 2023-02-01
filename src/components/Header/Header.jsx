import SortIcon from "@mui/icons-material/Sort";
import { grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import logo from "/assets/logo.svg";
import { Email, Mobile, Write } from "@svg";

export default function Header({ setOpen, open }) {
  return (
    <header className={classes.main}>
      <div className={classes.header}>
        <NavLink className={classes.item} to="/">
          <img className={classes.img} src={logo} alt="Logo" />
          Polytechnic
        </NavLink>
        <ul className={classes.items}>
          <li>
            <a href="mailto:alimam01828@gmail.com" className={classes.item}>
              <Email /> alimam01828@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+8801881614926" className={classes.item}>
              <Mobile /> +88-01881-614926
            </a>
          </li>
          <li className={classes.b}>
            <NavLink to="/contact" className={classes.item}>
              <Write /> Complain
            </NavLink>
          </li>
          <button
            className={`${classes.toggler} ${open ? classes.open : ""}`}
            onClick={() => setOpen((p) => !p)}
          >
            <SortIcon fontSize="medium" sx={{ color: grey[900] }} />
          </button>
        </ul>
      </div>
    </header>
  );
}
