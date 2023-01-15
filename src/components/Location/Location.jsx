import classes from "./location.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";

function Location({ current = "About", subRoute = null }) {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <NavLink to="/">Home</NavLink>
        <NavigateNextIcon />
        <span>{current}</span>
        {subRoute && (
          <>
            <NavigateNextIcon />
            <span>{subRoute}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Location;
