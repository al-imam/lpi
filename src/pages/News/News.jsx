import Post from "../../components/Post/Post";
import classes from "./news.module.css";

function News() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>News and event</h1>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}

export default News;
