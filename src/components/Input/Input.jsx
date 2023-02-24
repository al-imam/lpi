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
  ...rest
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
      {...rest}
    />
  );
}

export function Textarea({
  placeholder = "Message",
  setValue,
  value,
  rows = 6,
  name = "textarea",
  ...rest
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
      {...rest}
    />
  );
}

export default Input;

export function PasswordInput({
  placeholder,
  setValue,
  value,
  name = "password",
  ...rest
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
        {...rest}
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

export function Button({ children, width = "full", ...rest }) {
  return (
    <button
      className={`${classes.inputs} ${classes.text} ${classes[width]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
