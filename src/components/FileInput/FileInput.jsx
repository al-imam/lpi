import classes from "./fileInput.module.css";
import { useState, useRef } from "react";

function FileInput() {
  const [file, setFile] = useState("");
  const ref = useRef(null);

  function handleChange(evt) {
    const file = evt.target.files[0];
    setFile(file);
    console.log(file);
  }

  function remove() {
    ref.current.value = "";
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <input
          ref={ref}
          onChange={handleChange}
          type="file"
          name="file"
          className={classes.input}
        />
      </div>
      {file && (
        <div className={classes.image}>
          <img src={URL.createObjectURL(file)} />
          <div className={classes.imageInfo}>
            <button>delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileInput;
