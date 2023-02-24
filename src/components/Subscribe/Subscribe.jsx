import { useReducer } from "react";
import classes from "./sub.module.css";
import Input from "@components/Input/Input";
import Alert from "@components/Alert/Alert";
import { Button } from "@components/Input/Input";
import email from "@util/regex";
import {
  setDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

const init = { value: "", error: null, success: null, loading: false };

const db = getFirestore();

function Subscribe() {
  const [{ success, error, value, loading }, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  async function handleSubmit(e) {
    e.preventDefault();
    updateState({ error: null, success: null, loading: true });

    if (!value.match(email)) {
      return updateState({ error: "Enter a valid mail address! 😤" });
    }

    const idRef = doc(db, "email", value);
    try {
      const s = await getDoc(idRef);
      if (s.exists()) {
        return updateState({
          loading: false,
          success: "You're already a subscriber! 💖",
          value: "",
        });
      }
    } catch {
      (e) => console.log(e);
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
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
