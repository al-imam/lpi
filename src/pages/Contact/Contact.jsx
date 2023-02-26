import classes from "./contact.module.css";
import Map from "@components/Map/Map";
import Subscribe from "@components/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import Input, { Textarea, Button } from "@components/Input/Input";
import { useEffect, useReducer } from "react";
import emailRegExp from "@util/regex";
import Alert from "@components/Alert/Alert";

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
};

function Form() {
  const location = useLocation();
  const [{ name, email, subject, message, error }, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  useEffect(() => {
    updateState({ subject: location.state ?? subject });
  }, [location]);

  function sendMail(e) {
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
            error: `Enter ${node.name} it's required for mail. 🥹`,
          });
          haveError = true;
          break;
        }
      }
    }

    if (haveError) {
      return;
    }
  }

  return (
    <form className={classes.form} onSubmit={sendMail} noValidate={true}>
      {error !== null && (
        <Alert text={error} close={() => updateState({ error: null })} />
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
      <Button>Send Mail</Button>
    </form>
  );
}

export default Contact;
