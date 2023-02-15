import classes from "./input.module.css";
import { useState } from "react";
import { EyeOff, EyeOpen } from "@svg";

function Input({
  type = "text",
  placeholder,
  setValue,
  value,
  width = "full",
  name = type,
}) {
  return (
    <input
      spellCheck="false"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      className={`${classes.inputs} ${classes.text} ${classes[width]}`}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      required
      name={name}
    />
  );
}

export function Textarea({
  placeholder = "Message",
  setValue,
  value,
  rows = 6,
  name = "textarea",
}) {
  return (
    <textarea
      spellCheck="false"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      rows={rows}
      placeholder={placeholder}
      className={classes.inputs}
      autoComplete="off"
      data-type="textarea"
      name={name}
      required
    />
  );
}

export default Input;

export function PasswordInput({
  placeholder,
  setValue,
  value,
  name = "password",
}) {
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={`${classes.group} ${isFocus ? classes.focus : ""}`}>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        spellCheck="false"
        className={classes.inputs + " " + classes.password}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        type={open ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="off"
        required
        name={name}
      />
      <button
        className={classes.seen}
        type="button"
        onClick={() => setOpen((p) => !p)}
      >
        {open ? (
          <EyeOpen className={classes.eye} />
        ) : (
          <EyeOff className={classes.eye} />
        )}
      </button>
    </div>
  );
}
