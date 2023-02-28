import FileInput from "@components/FileInput/FileInput";
import Input, { Textarea, Button } from "@components/Input/Input";
import RadioInput from "@components/RadioInput/RadioInput";
import Alert from "@components/Alert/Alert";
import generateId from "@util/generateId";
import { LoadingLoopCircle } from "@svg";
import { app } from "@app/firebase";
import { useAuth } from "@context/AuthContext";
import classes from "./admin.module.css";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useReducer } from "react";
import { NavLink } from "react-router-dom";
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

function Form() {
  const [{ title, description, ...state }, updateState] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    init
  );

  const { currentUser } = useAuth();

  async function handleSubmit(evt) {
    evt.preventDefault();

    updateState({ error: null, success: null });

    const node = evt.target.elements;

    const { topic, file } = Object.fromEntries(
      new FormData(evt.target).entries()
    );

    if (currentUser === null) {
      if (file.name !== "") {
        updateState({ loadingImageUpload: true, removeImage: false });
        await new Promise((r, j) => setTimeout(r, 1500));
        return updateState({
          loadingImageUpload: false,
          error: "You're not login, please login first 😫",
        });
      }

      updateState({ loadingDataUpload: true });

      await new Promise((r, j) => setTimeout(r, 1500));

      return updateState({
        loadingDataUpload: false,
        error: "You're not login, please login first 😫",
      });
    }

    let url = null;

    if (file.name !== "") {
      updateState({ loadingImageUpload: true, removeImage: false });
      const storage = getStorage(app);
      const folderRef = ref(
        storage,
        `${topic.toLowerCase()}/${file.size}-${generateId()}`
      );

      try {
        const uploadTask = await uploadBytes(folderRef, file);
        url = await getDownloadURL(uploadTask.ref);
        updateState({
          loadingImageUpload: false,
          removeImage: true,
          success: "Image successfully uploaded 😊",
        });
      } catch (error) {
        console.dir(error);

        return updateState({
          loadingImageUpload: false,
          error: "Image upload failed! Try later 😫",
        });
      }
    }

    updateState({ loadingDataUpload: true });
    const db = getFirestore(app);

    try {
      const payload = {
        title,
        description,
        date: serverTimestamp(),
        url: url,
      };

      await addDoc(collection(db, topic.toLowerCase()), payload);

      return updateState({
        ...init,
        success: "Post successfully uploaded 😊",
      });
    } catch (error) {
      console.dir(error);

      return updateState({
        loadingDataUpload: false,
        error: "Post upload failed! Try later 😫",
      });
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate={true}>
      {state.success !== null && state.error === null && (
        <Alert
          error={false}
          text={state.success}
          close={() => updateState({ success: null })}
        />
      )}
      {state.error !== null && state.success === null && (
        <Alert
          error={true}
          text={state.error}
          close={() => updateState({ error: null })}
        />
      )}
      <RadioGroup />
      <Input
        value={title}
        setValue={(value) => updateState({ title: value })}
        type="text"
        placeholder="Title"
      />
      <Textarea
        value={description}
        setValue={(value) => updateState({ description: value })}
        placeholder="Say more about current News or Notice"
      />
      <FileInput
        remove={state.removeImage}
        loading={state.loadingImageUpload}
      />
      <Button disabled={state.loadingImageUpload || state.loadingDataUpload}>
        {state.loadingImageUpload || state.loadingDataUpload ? (
          <LoadingLoopCircle
            strokeWidth={3}
            style={{
              color: "var(--gray-800)",
              height: "0.9rem",
              transform: "scale(2) translateY(1px)",
            }}
          />
        ) : (
          "Post"
        )}
      </Button>
      {currentUser === null && (
        <p className={classes.login}>
          <span>You're not login!</span>{" "}
          <NavLink to="/admin/login">Login</NavLink>
        </p>
      )}
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
