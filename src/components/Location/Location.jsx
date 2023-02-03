import classes from "./location.module.css";
import { ArrowDown } from "@svg";
import { NavLink } from "react-router-dom";

function Location({ current = "About", subRoute = null }) {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <NavLink to="/">Home</NavLink>
        <ArrowDown />
        <span>{current}</span>
        {subRoute && (
          <>
            <ArrowDown />
            <span>{subRoute}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Location;
