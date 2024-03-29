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

  function isLoading() {
    return state.loadingImageUpload || state.loadingDataUpload;
  }

  const { currentUser } = useAuth();

  async function handleSubmit(evt) {
    evt.preventDefault();

    updateState({ error: null, success: null });

    const node = evt.target.elements;

    const { topic, file } = Object.fromEntries(
      new FormData(evt.target).entries()
    );

    if (title.trim() === "") {
      node.title.focus();
      return updateState({
        title: "",
        error: `Title is required in ${topic} 🥲`,
      });
    }

    if (description.trim() === "") {
      node.description.focus();
      return updateState({
        description: "",
        error: `Description is required in ${topic} 🥲`,
      });
    }

    if (currentUser === null) {
      const wait = 1500;
      if (file.name !== "") {
        updateState({ loadingImageUpload: true, removeImage: false });
        await new Promise((r, j) => setTimeout(r, wait));
        return updateState({
          loadingImageUpload: false,
          error: "You're not login 😫",
        });
      }

      updateState({ loadingDataUpload: true });

      await new Promise((r, j) => setTimeout(r, wait));

      return updateState({
        loadingDataUpload: false,
        error: "You're not login 😫",
      });
    }

    let url = null;

    if (file.name !== "") {
      updateState({ loadingImageUpload: true, removeImage: false });
      const storage = getStorage(app);
      const folderRef = ref(storage, `${topic}/${file.size}-${generateId()}`);

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

      await addDoc(collection(db, topic), payload);

      localStorage.removeItem(`firebase-data-${topic}`);

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
      <RadioGroup loading={isLoading()} />
      <Input
        value={title}
        setValue={(value) => updateState({ title: value })}
        type="text"
        placeholder="Title"
        name="title"
        disabled={isLoading()}
      />
      <Textarea
        value={description}
        setValue={(value) => updateState({ description: value })}
        placeholder="Say more about current News or Notice"
        name="description"
        disabled={isLoading()}
      />
      <FileInput
        remove={state.removeImage}
        loading={state.loadingImageUpload}
        disabled={isLoading()}
      />
      <Button disabled={state.loadingImageUpload || state.loadingDataUpload}>
        {isLoading() ? (
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
    </form>
  );
}

function RadioGroup({ loading = false }) {
  return (
    <div className={`${classes.radioGroup} ${loading && classes.radioDisable}`}>
      <RadioInput
        name="topic"
        value="news"
        defaultChecked={true}
        disabled={loading}
      />
      <RadioInput name="topic" value="notice" disabled={loading} />
    </div>
  );
}

export default Form;
