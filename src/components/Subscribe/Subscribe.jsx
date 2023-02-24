import { useReducer } from "react";
import classes from "./sub.module.css";
import Input from "@components/Input/Input";
import Alert from "@components/Alert/Alert";
import email from "@util/regex";

const init = { value: "", error: null, success: null };

function Subscribe() {
  const [{ success, error, value }, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  function handleSubmit(e) {
    e.preventDefault();
    updateState({ error: null, success: null });

    if (!value.match(email)) {
      return updateState({ error: "Enter a valid mail address! 😤" });
    }

    updateState({ success: "Successfully Subscribed! 😊" });
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
              <Alert text={error} close={() => updateState({ error: null })} />
            )}
            {success === null || (
              <Alert
                text={success}
                error={false}
                close={() => updateState({ success: null })}
              />
            )}
            <Input
              placeholder="example@gmail.com"
              type="email"
              value={value}
              setValue={(value) => updateState({ value })}
            />
            <Input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
