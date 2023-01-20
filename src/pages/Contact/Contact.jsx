import classes from "./contact.module.css";
import Map from "../../components/Map/Map";

function Contact() {
  return (
    <main>
      <Map />
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h4>Don't be shy</h4>
          <p>
            you can share any kind of information with us, like if you have any
            complain about Lakshmipur Polytechnic Institute, or if you have any
            question feel free to ask. You can also reach us with phone number.
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
            placeholder="Subject"
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
    </main>
  );
}

export default Contact;
