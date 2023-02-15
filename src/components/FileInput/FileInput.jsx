import classes from "./fileInput.module.css";
import { useState, useRef } from "react";
import { Trash } from "@svg";

function FileInput() {
  const [file, setFile] = useState("");
  const ref = useRef(null);

  function handleChange(evt) {
    const file = evt.target.files[0];
    setFile(file);
    console.log(file);
  }

  function remove() {
    setFile("");
    ref.current.value = "";
  }

  return (
    <div className={classes.wrapper}>
      {file ? (
        <div className={classes.image}>
          <img src={URL.createObjectURL(file)} />
          <div className={classes.delete}>
            <button type="button" onClick={remove}>
              <Trash />
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <input
            ref={ref}
            onChange={handleChange}
            type="file"
            name="file"
            className={classes.input}
          />
        </div>
      )}
    </div>
  );
}

export default FileInput;
