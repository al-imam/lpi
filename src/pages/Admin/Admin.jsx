import Input, { Textarea } from "@components/Input/Input";
import RadioInput from "@components/RadioInput/RadioInput";
import { useReducer } from "react";
import FileInput from "@components/FileInput/FileInput";
import classes from "./admin.module.css";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

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

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries());
    const db = getFirestore(app);
    addDoc(collection(db, data.topic.toLowerCase()), {
      title,
      description,
      date: serverTimestamp(),
      url: data.file.name,
    })
      .then((ref) => console.log(ref))
      .catch((error) => console.log(error));
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <RadioGroup />
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
      <FileInput />
      <Input type="submit" value="Post" />
    </form>
  );
}

function RadioGroup() {
  return (
    <div className={classes.radioGroup}>
      <RadioInput name="topic" value="News" defaultChecked={true} />
      <RadioInput name="topic" value="Notice" />
    </div>
  );
}
