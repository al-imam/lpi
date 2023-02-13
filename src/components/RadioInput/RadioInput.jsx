import { useId } from "react";
import classes from "./radio.module.css";

function RadioInput({ text, name }) {
  const id = useId();
  return (
    <div>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default RadioInput;
