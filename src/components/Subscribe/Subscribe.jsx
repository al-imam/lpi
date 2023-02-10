import { useState } from "react";
import classes from "./sub.module.css";
import Input from "@components/Input/Input";

const emailRegex = /^[a-zA-Z]([a-zA-Z0-9\.]){2,}@[a-z]{3,7}\.[a-z]{2,5}$/;

function Subscribe() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [sub, setSub] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    setError(null);
    setSuccess(null);

    if (sub) {
      if (value === "reset") {
        setSub(false);
        setValue("");
        return;
      }
      setError("You're already a subscriber !");
      return;
    }

    if (value.trim() === "") {
      setError("Email is required !");
      return;
    }

    if (!value.match(emailRegex)) {
      setError("Enter a valid mail address");
      return;
    }

    setValue("");
    setSuccess("Successfully Subscribed !");
    setSub(true);
  }

  return (
    <section style={{ paddingInline: "var(--gap-inline)" }}>
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.text}>
            <h5>Subscribe</h5>
            <span>Subscribe for future Notice's and updates!</span>
          </div>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            {error === null || <span className={classes.error}>{error}</span>}
            {success === null || (
              <span className={classes.success}>{success}</span>
            )}
            <Input
              placeholder="example@gmail.com"
              type="email"
              value={value}
              setValue={(value) => setValue(value)}
            />
            <Input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
