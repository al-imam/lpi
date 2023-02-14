import classes from "./fileInput.module.css";

function FileInput() {
  return (
    <div class={classes.container}>
      <input type="file" name="file" className={classes.input} />
    </div>
  );
}

export default FileInput;
