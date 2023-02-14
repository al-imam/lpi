import { useId } from "react";
import classes from "./radio.module.css";

function RadioInput({ value, name, ...rest }) {
  const id = useId();

  return (
    <div className={classes.container}>
      <input
        value={value}
        name={name}
        type="radio"
        id={id}
        className={classes.radio}
        {...rest}
      />
      <label htmlFor={id} className={classes.label}>
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
