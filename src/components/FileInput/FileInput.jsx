import classes from "./fileInput.module.css";
import { useState, useRef, useEffect } from "react";
import { Trash } from "@svg";
import { LoadingLoop } from "@svg";

function FileInput({ loading = false, remove = false, disabled = false }) {
  const [file, setFile] = useState(null);
  const ref = useRef(null);

  function handleRemove() {
    setFile(null);
    ref.current.value = "";
  }

  useEffect(() => {
    if (remove) {
      handleRemove();
    }
  }, [remove]);

  return (
    <div className={classes.wrapper}>
      {file && (
        <div className={classes.image}>
          <img src={URL.createObjectURL(file)} />
          {loading ? (
            <div className={classes.loading}>
              <LoadingLoop />
            </div>
          ) : (
            <div className={classes.delete}>
              {
                <button type="button" onClick={handleRemove}>
                  <Trash />
                </button>
              }
            </div>
          )}
        </div>
      )}
      <div className={`${classes.container} ${file && classes.none}`}>
        <input
          ref={ref}
          accept="image/*"
          onChange={(evt) => setFile(evt.target.files[0])}
          type="file"
          name="file"
          className={classes.input}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default FileInput;
