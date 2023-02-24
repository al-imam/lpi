import { useState, useReducer } from "react";
import classes from "./sub.module.css";
import Input from "@components/Input/Input";
import Alert from "@components/Alert/Alert";

const emailRegex = /^[a-zA-Z]([a-zA-Z0-9\.]){2,}@[a-z]{3,7}\.[a-z]{2,5}$/;

const init = { value: "", error: null, success: null };

function Subscribe() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [state, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    setError(null);
    setSuccess(null);

    if (value.trim() === "") {
      return setError("Email is required! 😤");
    }

    if (!value.match(emailRegex)) {
      return setError("Enter a valid mail address! 😤");
    }

    setValue("");
    setSuccess("Successfully Subscribed! 😊");
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
            {error === null || (
              <Alert text={error} close={() => setError(null)} />
            )}
            {success === null || (
              <Alert
                text={success}
                error={false}
                close={() => setSuccess(null)}
              />
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
