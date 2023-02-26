import { useReducer } from "react";
import classes from "./sub.module.css";
import Input from "@components/Input/Input";
import Alert from "@components/Alert/Alert";
import { Button } from "@components/Input/Input";
import email from "@util/regex";
import { LoadingLoopCircle } from "@svg";
import { setDoc, getFirestore, doc, getDoc } from "firebase/firestore";

function saveLocal(key, value) {
  const prev = localStorage.getItem(key);
  if (prev) {
    const array = [...JSON.parse(prev), value];
    localStorage.setItem(key, JSON.stringify(array));
    return;
  }
  localStorage.setItem(key, JSON.stringify([value]));
}

function haveLocal(key, value) {
  const local = localStorage.getItem(key);
  if (local) {
    return local.includes(value);
  }

  return false;
}

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
      return updateState({
        error: "Enter a valid mail address! 🤐",
        loading: false,
      });
    }

    if (haveLocal(email, value)) {
      return updateState({
        loading: false,
        success: "You're already a subscriber! 💖",
        value: "",
      });
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
    } catch (e) {
      console.dir(e);
      return updateState({
        loading: false,
        error: "Something is wrong! 😖",
      });
    }

    try {
      await setDoc(doc(db, "email", value), {});
      saveLocal(email, value);
      return updateState({
        loading: false,
        success: "Successfully Subscribed! 😊",
        value: "",
      });
    } catch (e) {
      console.dir(e);
      return updateState({
        loading: false,
        error: "Something went wrong! 😖",
      });
    }
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
            <Button disabled={loading}>
              {loading ? (
                <LoadingLoopCircle
                  strokeWidth={3}
                  style={{
                    color: "var(--gray-800)",
                    height: "0.9rem",
                    transform: "scale(2) translateY(1px)",
                  }}
                />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
