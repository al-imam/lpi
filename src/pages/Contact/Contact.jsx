import classes from "./contact.module.css";
import Map from "@components/Map/Map";
import Subscribe from "@components/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import Input, { Textarea, Button } from "@components/Input/Input";
import { useEffect, useReducer } from "react";

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
};

function Form() {
  const location = useLocation();
  const [{ name, email, subject, message }, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  useEffect(() => {
    updateState({ subject: location.state ?? "" });
  }, [location.key]);

  return (
    <form
      className={classes.form}
      onSubmit={(e) => e.preventDefault()}
      noValidate={true}
    >
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
        name="body"
      />
      <Button>Send Mail</Button>
    </form>
  );
}

export default Contact;
