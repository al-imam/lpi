import classes from "./input.module.css";
import { useState } from "react";

function Input({
  type = "text",
  placeholder,
  setValue,
  value,
  width = "full",
}) {
  return (
    <input
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      className={`${classes.inputs} ${classes.text} ${classes[width]}`}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
}

export function Textarea({
  placeholder = "Message",
  setValue,
  value,
  rows = 6,
}) {
  return (
    <textarea
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      rows={rows}
      placeholder={placeholder}
      className={classes.inputs}
      autoComplete="off"
      data-type="textarea"
      required
    />
  );
}

export default Input;

export function PasswordInput({ placeholder, setValue, value }) {
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={`${classes.group} ${isFocus ? classes.focus : ""}`}>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={classes.inputs + " " + classes.password}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        type={open ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <button
        className={classes.seen}
        type="button"
        onClick={() => setOpen((p) => !p)}
      >
        <img className={classes.eye} alt={open ? "Eye Open" : "Eye Close"} />
      </button>
    </div>
  );
}
