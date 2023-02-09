import Post from "@components/Post/Post";
import classes from "./news.module.css";
import Location from "@components/Location/Location";

function News() {
  return (
    <>
      <Location current="News And event" />
      <section className={classes.section}>
        <div className={classes.container}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </>
  );
}

export default News;
