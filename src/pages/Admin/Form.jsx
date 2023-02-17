import FileInput from "@components/FileInput/FileInput";
import Input, { Textarea } from "@components/Input/Input";
import RadioInput from "@components/RadioInput/RadioInput";
import Alert from "@components/Alert/Alert";
import generateId from "@util/generateId";
import classes from "./admin.module.css";
import { app } from "../../firebase";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useReducer } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const init = {
  title: "",
  description: "",
  loadingImageUpload: false,
  loadingDataUpload: false,
  error: null,
  success: null,
  removeImage: false,
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

    case "error":
      return {
        ...prevState,
        error: payload,
        success: null,
      };

    case "success":
      return {
        ...prevState,
        success: payload,
        error: null,
      };

    case "loadingDataUpload":
      return {
        ...prevState,
        loadingDataUpload: payload,
      };

    case "loadingImageUpload":
      return {
        ...prevState,
        loadingImageUpload: payload,
        removeImage: false,
      };

    case "errorImageUpload":
      return {
        ...prevState,
        loadingImageUpload: false,
        error: payload,
      };

    case "successImageUpload":
      return {
        ...prevState,
        loadingImageUpload: false,
        success: payload,
        removeImage: true,
      };

    case "errorDataUpload":
      return {
        ...prevState,
        loadingDataUpload: false,
        error: payload,
      };

    case "successDataUpload":
      return {
        ...prevState,
        loadingDataUpload: false,
        success: payload,
      };

    case "reset":
      return {
        ...prevState,
        title: "",
        description: "",
        loadingImageUpload: false,
        loadingDataUpload: false,
      };

    case "resetErrorAndSuccess":
      return {
        ...prevState,
        error: null,
        success: null,
      };

    default:
      throw new Error(`No Action called ${type}`);
  }
}

function Form() {
  const [{ title, description, ...state }, dispatch] = useReducer(
    reducer,
    init
  );

  async function handleSubmit(evt) {
    evt.preventDefault();

    dispatch({ type: "resetErrorAndSuccess" });

    if (title === "" || description === "") {
      return dispatch({
        type: "error",
        payload: "Title and description is required in post! ☹️",
      });
    }

    const { topic, file } = Object.fromEntries(
      new FormData(evt.target).entries()
    );

    let url = null;

    if (file.name !== "") {
      dispatch({ type: "loadingImageUpload", payload: true });
      const storage = getStorage(app);
      const folderRef = ref(
        storage,
        `${topic.toLowerCase()}/${file.size}-${generateId()}`
      );

      try {
        const uploadTask = await uploadBytes(folderRef, file);
        url = await getDownloadURL(uploadTask.ref);
        dispatch({
          type: "successImageUpload",
          payload: "Image successfully uploaded 😊",
        });
      } catch (error) {
        console.warn(error);

        return dispatch({
          type: "errorImageUpload",
          payload: "Image upload failed! Try later 😫",
        });
      }
    }

    dispatch({ type: "loadingDataUpload", payload: true });
    const db = getFirestore(app);

    try {
      const payload = {
        title,
        description,
        date: serverTimestamp(),
        url: url,
      };

      const { id } = await addDoc(collection(db, topic.toLowerCase()), payload);

      dispatch({
        type: "successDataUpload",
        payload: "Post successfully uploaded 😊",
      });

      console.log({ ...payload, id });
    } catch (error) {
      console.warn(error);

      return dispatch({
        type: "errorDataUpload",
        payload: "Post upload failed! Try later 😫",
      });
    }

    dispatch({ type: "reset" });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {state.success !== null && state.error === null && (
        <Alert
          error={false}
          text={state.success}
          close={() => dispatch({ type: "success", payload: null })}
        />
      )}
      {state.error !== null && state.success === null && (
        <Alert
          error={true}
          text={state.error}
          close={() => dispatch({ type: "error", payload: null })}
        />
      )}
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
      <FileInput
        remove={state.removeImage}
        loading={state.loadingImageUpload}
      />
      <Input
        type="submit"
        value="Post"
        disabled={state.loadingImageUpload || state.loadingDataUpload}
      />
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
