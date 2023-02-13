import Input, { Textarea } from "@components/Input/Input";
import { useReducer } from "react";
import classes from "./admin.module.css";

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

const init = {
  title: "",
  description: "",
};

function reducer(prevState, action) {
  const { type, payload } = action;
  switch (type) {
    case "title":
      return {
        ...prevState,
        title: payload,
      };
    case "description":
      return {
        ...prevState,
        description: payload,
      };
    default:
      throw new Error(`No Action called ${type}`);
  }
}

function Form() {
  const [{ title, description }, dispatch] = useReducer(reducer, init);

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <Input
        value={title}
        setValue={(value) => dispatch({ type: "title", payload: value })}
        type="text"
        placeholder="Title"
      />
      <Textarea
        value={description}
        setValue={(value) => dispatch({ type: "description", payload: value })}
        placeholder="Say more about current News or Notice"
      />
      <Input type="submit" value="Post" />
    </form>
  );
}
