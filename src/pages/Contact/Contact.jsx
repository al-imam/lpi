import classes from "./contact.module.css";
import Map from "@components/Map/Map";
import Subscribe from "@components/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const init = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const location = useLocation();
  const [store, setStore] = useState(init);

  useEffect(() => {
    setStore((p) => ({ ...p, subject: location.state ?? "" }));
  }, [location.state]);

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

          <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
            <input
              value={store.name}
              onChange={(evt) =>
                setStore((p) => ({ ...p, name: evt.target.value }))
              }
              type="text"
              autoComplete="off"
              placeholder="Your Name"
              className={classes.input}
              name="name"
              id="name"
              required
            />
            <input
              value={store.email}
              onChange={(evt) =>
                setStore((p) => ({ ...p, email: evt.target.value }))
              }
              type="email"
              placeholder="Your Email"
              autoComplete="off"
              className={classes.input}
              name="email"
              id="email"
              required
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="Subject"
              value={store.subject}
              onChange={(evt) =>
                setStore((p) => ({ ...p, subject: evt.target.value }))
              }
              className={classes.input}
              name="subject"
              id="subject"
              required
            />
            <textarea
              value={store.message}
              onChange={(evt) =>
                setStore((p) => ({ ...p, message: evt.target.value }))
              }
              rows="6"
              placeholder="Message"
              autoComplete="off"
              className={classes.input}
              name="message"
              id="message"
              required
            />
            <input
              type="submit"
              id="contact-submit"
              className={classes["submit-button"] + " " + classes.input}
              value="Send Mail"
            />
          </form>
        </div>
      </section>
      <Subscribe />
    </main>
  );
}

export default Contact;
