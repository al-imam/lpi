import { lazy } from "react";
import classes from "./admin.module.css";
const Form = lazy(() => import("./Form"));
import { useAuth } from "@context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Contact() {
  const { currentUser } = useAuth();

  return (
    <main className={classes.s}>
      <section className={classes.wrapper}>
        <div className={classes.title}>
          <h4>Hey, dear</h4>
          <p>
            {currentUser ? (
              `The process of creating a post involves selecting notice or news
                type, add a title and description, and optionally uploading an
                image. Once all fields are completed then post can be submitted
                by clicking the submit button. 😊`
            ) : (
              <>
                You're con't post news or notice&nbsp;
                <NavLink to="admin/login" className={classes.textLink}>
                  you're not login
                </NavLink>
                , the process of creating a post involves selecting notice or
                news add a title and description, and optionally uploading an
                image. Once all fields are completed then post can be submitted
                by clicking the submit button. 😊
              </>
            )}
          </p>
        </div>
        <Form />
      </section>
    </main>
  );
}
