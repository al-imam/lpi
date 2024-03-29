import Input, { Button, Textarea } from "@components/Input/Input";
import { LoadingLoopCircle } from "@svg";
import emailRegExp from "@util/regex";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { lazy, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import classes from "./contact.module.css";
const Map = lazy(() => import("@components/Map/Map"));
const Subscribe = lazy(() => import("@components/Subscribe/Subscribe"));
const Alert = lazy(() => import("@components/Alert/Alert"));

const db = getFirestore();

function Contact() {
  return (
    <main className={classes.s}>
      <Map />
      <section className={classes.q}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <h4>Don't be shy</h4>
            <p>
              you can share any kind of information with us, like if you have
              any complain about Lakshmipur Polytechnic Institute, or if you
              have any question feel free to ask. You can also reach us with
              phone number.
            </p>
          </div>
          <Form />
        </div>
      </section>
      <Subscribe />
    </main>
  );
}

const init = {
  name: "",
  email: "",
  subject: "",
  message: "",
  error: null,
  loading: false,
  success: null,
};

function Form() {
  const location = useLocation();
  const [
    { name, email, subject, message, error, success, loading },
    updateState,
  ] = useReducer((prev, next) => ({ ...prev, ...next }), init);

  useEffect(() => {
    updateState({ subject: location.state ?? subject });
  }, [location]);

  async function sendMail(e) {
    e.preventDefault();
    const elements = [...e.target.elements].slice(0, -1);
    updateState({ error: null });
    let haveError = false;
    for (const node of elements) {
      if (node.name === "email") {
        if (!node.value.match(emailRegExp)) {
          node.focus();
          updateState({ error: "Enter a valid email address! 🥹" });
          haveError = true;
          break;
        }
      }

      if (["subject", "name", "message"].includes(node.name)) {
        if (node.value === "") {
          node.focus();
          updateState({
            error: `${node.name} is required for mail 🥹`,
          });
          haveError = true;
          break;
        }
      }
    }

    if (haveError) {
      return;
    }

    updateState({ error: null, success: null, loading: true });

    try {
      await addDoc(collection(db, "notification"), {
        email,
        name,
        message,
        subject,
      });
      return updateState({
        ...init,
        success: "Mail send successfully. 😚",
      });
    } catch (error) {
      console.dir(error);
      return updateState({
        success: "Something went wrong, Try again. 🥹",
        loading: false,
      });
    }
  }

  return (
    <form className={classes.form} onSubmit={sendMail} noValidate={true}>
      {error !== null && (
        <Alert text={error} close={() => updateState({ error: null })} />
      )}
      {success !== null && (
        <Alert
          text={success}
          error={false}
          close={() => updateState({ success: null })}
        />
      )}
      <Input
        value={name}
        setValue={(value) => updateState({ name: value })}
        placeholder="Your Name"
        name="name"
      />
      <Input
        value={email}
        setValue={(value) => updateState({ email: value })}
        type="email"
        placeholder="Your Email"
        name="email"
      />
      <Input
        value={subject}
        setValue={(value) => updateState({ subject: value })}
        placeholder="Subject"
        name="subject"
      />
      <Textarea
        value={message}
        setValue={(value) => updateState({ message: value })}
        placeholder="Message"
        name="message"
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
          "Send mail"
        )}
      </Button>
    </form>
  );
}

export default Contact;
