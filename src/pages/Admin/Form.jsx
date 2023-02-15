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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import generateId from "@util/generateId";

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

  async function handleSubmit(evt) {
    evt.preventDefault();
    const { topic, file } = Object.fromEntries(
      new FormData(evt.target).entries()
    );

    let url = null;

    if (file.name !== "") {
      const storage = getStorage(app);
      const folderRef = ref(
        storage,
        `${topic.toLowerCase()}/${file.size}-${generateId()}`
      );

      try {
        const uploadTask = await uploadBytes(folderRef, file);
        url = await getDownloadURL(uploadTask.ref);
      } catch (error) {
        return console.warn(error);
      }
    }

    const db = getFirestore(app);

    try {
      const { id } = await addDoc(collection(db, topic.toLowerCase()), {
        title,
        description,
        date: serverTimestamp(),
        url: url,
      });
      console.log("document uploaded id:", id);
    } catch (error) {
      console.warn(error);
    }
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

export default Form;
