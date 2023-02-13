import Input, { Textarea } from "@components/Input/Input";
import RadioInput from "@components/RadioInput/RadioInput";
import { useReducer } from "react";
import classes from "./admin.module.css";

export default function Contact() {
  return (
    <main className={classes.s}>
      <section className={classes.wrapper}>
        <div className={classes.title}>
          <h4>Welcome, dear admin!</h4>
          <p>
            The process of creating a post involves selecting "notice" or "news"
            type, adding a title and content, and optionally uploading an image.
            Once all fields are completed, the post can be submitted by clicking
            the "Submit" button.
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
      <RadioInput name="topic" text="News" />
      <RadioInput name="topic" text="Notice" />
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
