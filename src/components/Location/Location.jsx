import classes from "./location.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Location({ page = "About" }) {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <span>Home</span>
        <NavigateNextIcon />
        <span>{page}</span>
      </div>
    </div>
  );
}

export default Location;
