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
        <img
          style={{
            maxWidth: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            borderRadius: "0.25rem",
            outline: "1px solid var(--gray-200)",
          }}
          src={URL.createObjectURL(file)}
        />
      )}
    </div>
  );
}

export default FileInput;
