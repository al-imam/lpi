import classes from "./loader.module.css";

function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes.loadContainer}>
        <div className={classes.lineSpinner}></div>
      </div>
    </div>
  );
}

export default Loader;
