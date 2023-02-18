import classes from "./contact.module.css";
import Map from "@components/Map/Map";
import Subscribe from "@components/Subscribe/Subscribe";
import { useLocation } from "react-router-dom";
import Input, { Textarea } from "@components/Input/Input";
import { useEffect, useState } from "react";
import Email from "../../util/smtp";

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

          <form className={classes.form} onSubmit={handleSubmit}>
            <Input
              value={store.name}
              setValue={(value) => setStore((p) => ({ ...p, name: value }))}
              placeholder="Your Name"
              name="name"
            />
            <Input
              value={store.email}
              setValue={(value) => setStore((p) => ({ ...p, email: value }))}
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <Input
              value={store.subject}
              setValue={(value) => setStore((p) => ({ ...p, subject: value }))}
              placeholder="Subject"
              name="subject"
            />
            <Textarea
              value={store.message}
              setValue={(value) => setStore((p) => ({ ...p, message: value }))}
              placeholder="Message"
              name="body"
            />
            <Input type="submit" value="Send Mail" />
          </form>
        </div>
      </section>
      <Subscribe />
    </main>
  );
}

export default Contact;
