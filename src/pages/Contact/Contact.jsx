import classes from "./contact.module.css";

function Contact() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h4>Don't be shy</h4>
        <p>
          You can also reach us with your query like which WordPress themes are
          best suited for you business niches or which WordPress hosting is best
          suited for your website. We feel free to assist you as long as
          possible.
        </p>
      </div>

      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          className={classes.input}
          name="name"
          id="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
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
  );
}

export default Contact;