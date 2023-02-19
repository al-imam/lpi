import Input, { PasswordInput } from "@components/Input/Input";
import { useState, useReducer } from "react";
import { useAuth } from "../../context/AuthContext";
import classes from "./login.module.css";

const init = {
  email: "",
  password: "",
};

function reducer(prevState, action) {
  const { type, payload } = action;
  switch (type) {
    case "email":
      return {
        ...prevState,
        email: payload,
      };
    case "password":
      return {
        ...prevState,
        password: payload,
      };
    default:
      throw new Error(`No action called ${type}`);
  }
}

export default function Contact() {
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
        <Form />
      </section>
    </main>
  );
}

function Form() {
  const [{ email, password }, dispatch] = useReducer(reducer, init);
  const { currentUser } = useAuth();

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <Input
        value={email}
        setValue={(value) => dispatch({ type: "email", payload: value })}
        type="email"
        placeholder="Email"
      />
      <PasswordInput
        value={password}
        setValue={(value) => dispatch({ type: "password", payload: value })}
        placeholder="Password"
      />
      <Input type="submit" value="Login" />
      {JSON.stringify(currentUser)}
    </form>
  );
}
