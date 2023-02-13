import { useId } from "react";
import classes from "./radio.module.css";

function RadioInput({ text, name }) {
  const id = useId();
  return (
    <div className={classes.container}>
      <input type="radio" id={id} name={name} className={classes.radio} />
      <label htmlFor={id} className={classes.label}>
        {text}
      </label>
    </div>
  );
}

export default RadioInput;
