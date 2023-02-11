import Input from "@components/Input/Input";
import { useState } from "react";
import classes from "./login.module.css";

const init = {
  email: "",
  password: "",
};

function Contact() {
  const [store, setStore] = useState(init);

  return (
    <main className={classes.s}>
      <section className={classes.wrapper}>
        <div className={classes.title}>
          <h4>Login as admin</h4>
          <p>
            you can share any kind of information with us, like if you have any
            complain about Lakshmipur Polytechnic Institute, or if you have any
            question feel free to ask. You can also reach us with phone number.
          </p>
        </div>

        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <Input
            value={store.email}
            setValue={(value) => setStore((p) => ({ ...p, email: value }))}
            type="email"
            placeholder="Email"
          />
          <Input
            value={store.password}
            setValue={(value) => setStore((p) => ({ ...p, password: value }))}
            placeholder="Password"
          />
          <Input type="submit" value="Send Mail" />
        </form>
      </section>
    </main>
  );
}

export default Contact;
