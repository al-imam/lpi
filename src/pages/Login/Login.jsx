import Input, { PasswordInput } from "@components/Input/Input";
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
            For security reasons, it's important to keep your login credentials
            safe and secure. If you're new to the dashboard, please contact the
            admin to obtain an account.
          </p>
        </div>

        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <Input
            value={store.email}
            setValue={(value) => setStore((p) => ({ ...p, email: value }))}
            type="email"
            placeholder="Email"
          />
          <PasswordInput
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
