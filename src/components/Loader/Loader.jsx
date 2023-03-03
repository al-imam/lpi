import classes from "./loader.module.css";

function Loader({ height = null }) {
  return (
    <div className={classes.container} style={{ height: height }}>
      <div className={classes.loadContainer}>
        <div className={classes.lineSpinner}></div>
      </div>
    </div>
  );
}

export default Loader;
