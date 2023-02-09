import classes from "./contact.module.css";
import Map from "@components/Map/Map";
import Subscribe from "@components/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Contact() {
  const state = useLocation();
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setSubject(state.state ?? "");
  }, [state.state]);

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
              type="text"
              autoComplete="off"
              placeholder="Your Name"
              className={classes.input}
              name="name"
              id="name"
              required
            />
            <input
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
              value={subject}
              onChange={(evt) => setSubject(evt.target.value)}
              className={classes.input}
              name="subject"
              id="subject"
              required
            />
            <textarea
              rows="6"
              placeholder="Message"
              autoComplete="off"
              className={classes.input}
              name="message"
              id="message"
              required
            ></textarea>
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
