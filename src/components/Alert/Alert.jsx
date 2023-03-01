import classes from "./alert.module.css";
import { SuccessIcon, ErrorIcon, CloseIcon } from "@svg";

function Alter({ error = true, text = "Imam forget to give me text", close }) {
  return (
    <div
      className={`${classes.alert} ${error ? classes.error : classes.success}`}
    >
      <div className={classes.svg}>
        {error ? <ErrorIcon /> : <SuccessIcon />}
      </div>
      <p className={classes.text}>{text}</p>
      <button onClick={close} type="button" className={classes.button}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Alter;
