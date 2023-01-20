import { useState } from "react";
import classes from "./sub.module.css";

function Subscribe() {
  const [value, setValue] = useState("");
  return (
    <section style={{ paddingInline: "var(--gap-inline)" }}>
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.text}>
            <h5>Subscribe</h5>
            <span>Subscribe for future Notice's and updates!</span>
          </div>
          <form className={classes.form}>
            <input
              className={classes.input}
              type="email"
              name="subscribe"
              value={value}
              onChange={(evt) => setValue(evt.target.value)}
            />
            <button className={classes.button + " " + classes.input}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
