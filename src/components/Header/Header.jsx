import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import logo from "/assets/logo.svg";
import { Email, Mobile, Write, Menu, UserAdd, UserRemove } from "@svg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header({ setOpen, open }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <header className={classes.main}>
      <div className={classes.header}>
        <div className={classes.group}>
          <NavLink className={classes.item} to="/">
            <img className={classes.img} src={logo} alt="Logo" />
          </NavLink>
          {currentUser === null ? (
            <button
              className={classes.log + " " + classes.in}
              onClick={() => navigate("/admin/login")}
            >
              Login <UserAdd />
            </button>
          ) : (
            <button className={classes.log + " " + classes.out}>
              Logout <UserRemove />
            </button>
          )}
        </div>
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
            <NavLink to="/contact" state="@Complain" className={classes.item}>
              <Write width="30" height="30" /> Complain
            </NavLink>
          </li>
          <button
            className={`${classes.toggler} ${open ? classes.open : ""}`}
            onClick={() => setOpen((p) => !p)}
          >
            <Menu />
          </button>
        </ul>
      </div>
    </header>
  );
}
