import classes from "./location.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Location({ current = "About", subRoute = null }) {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <span>Home</span>
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
