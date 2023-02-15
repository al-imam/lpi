import classes from "./admin.module.css";
import Form from "./Form";

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
