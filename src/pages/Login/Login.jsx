import Input, { PasswordInput } from "@components/Input/Input";
import { useReducer } from "react";
import { useAuth } from "@context/AuthContext";
import classes from "./login.module.css";
import Alert from "@components/Alert/Alert";
import { LoadingLoopCircle } from "@svg";

const init = {
  email: "",
  password: "",
  loading: false,
  error: null,
  success: null,
};

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
  const [{ email, password, loading, error, success }, updateState] =
    useReducer((prev, next) => ({ ...prev, ...next }), init);
  const { currentUser, login } = useAuth();

  async function submit(event) {
    event.preventDefault();

    if (currentUser) {
      return;
    }

    const formData = Object.fromEntries(new FormData(event.target));

    updateState({ error: null, success: null, loading: true });

    try {
      await login(formData.email, formData.password);
      updateState({ ...init, success: "Login successful. 😊" });
    } catch (error) {
      if (error.code == "auth/network-request-failed") {
        updateState({
          error: "Network error, check your internet connection ☹️",
        });
      } else if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        updateState({ error: "Username and password incorrect 😫" });
      } else {
        updateState({ error: "Something went wrong 😓" });
      }
      console.dir(error);
    } finally {
      updateState({ loading: false });
    }

    console.log(currentUser);
  }

  return (
    <form className={classes.form} onSubmit={submit}>
      {success !== null && (
        <Alert
          error={false}
          text={success}
          close={() => update({ success: null })}
        />
      )}
      {error !== null && (
        <Alert
          error={true}
          text={error}
          close={() => updateState({ error: null })}
        />
      )}
      <Input
        value={email}
        setValue={(value) => updateState({ email: value })}
        type="email"
        placeholder="Email"
      />
      <PasswordInput
        value={password}
        setValue={(value) => updateState({ password: value })}
        placeholder="Password"
      />
      <Input type="submit" disabled={loading} value="Login" />
      {loading && (
        <div className={classes.overlay}>
          <LoadingLoopCircle />
        </div>
      )}
    </form>
  );
}
