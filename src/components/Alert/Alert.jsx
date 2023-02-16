import classes from "./alert.module.css";
import { SuccessIcon, ErrorIcon, CloseIcon } from "@svg";

function Alter({ error = true, text = "Lorem ipsum dolor sit" }) {
  return (
    <div className={classes.alert + " " + classes.error}>
      <div className={classes.svg}>
        {error ? <ErrorIcon /> : <SuccessIcon />}
      </div>
      <p className={classes.text}>{text}</p>
      <button className={classes.button}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Alter;
