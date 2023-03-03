import Input, { PasswordInput, Button } from "@components/Input/Input";
import { useReducer, lazy } from "react";
import { useAuth } from "@context/AuthContext";
import classes from "./login.module.css";
const Alert = lazy(() => import("@components/Alert/Alert"));
import { LoadingLoopCircle } from "@svg";
import emailRegExp from "@util/regex";

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

    const node = event.target.elements;

    if (!email.match(emailRegExp)) {
      node.email.focus();
      return updateState({ error: "Enter a valid mail address! 🥹" });
    }

    if (password === "") {
      node.password.focus();
      return updateState({ error: "Enter password 🥲" });
    }

    if (currentUser) {
      return updateState({ success: "You're already login 💖" });
    }

    updateState({ error: null, success: null, loading: true });

    try {
      await login(email, password);
      return updateState({ ...init, success: "Login successful 😊" });
    } catch (error) {
      console.dir(error);
      if (error.code == "auth/network-request-failed") {
        return updateState({
          loading: false,
          error: "Network error, check your internet connection ☹️",
        });
      }
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        return updateState({
          loading: false,
          error: "Username and password incorrect 😫",
        });
      }
      return updateState({ loading: false, error: "Something went wrong 😓" });
    }
  }

  return (
    <form className={classes.form} onSubmit={submit} noValidate={true}>
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
        disabled={loading}
      />
      <PasswordInput
        value={password}
        setValue={(value) => updateState({ password: value })}
        placeholder="Password"
        disabled={loading}
      />
      <Button disabled={loading}>
        {loading ? (
          <LoadingLoopCircle
            strokeWidth={3}
            style={{
              color: "var(--gray-800)",
              height: "0.9rem",
              transform: "scale(2) translateY(1px)",
            }}
          />
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
