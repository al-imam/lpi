import classes from "./fileInput.module.css";
import { useState } from "react";
import { Trash } from "@svg";

function FileInput() {
  const [file, setFile] = useState("");

  function remove() {
    setFile("");
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
            onChange={(evt) => setFile(evt.target.files[0])}
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
