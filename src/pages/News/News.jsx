import Post from "@components/Post/Post";
import classes from "./news.module.css";
import Location from "@components/Location/Location";
import useGetData from "@hooks/useGetData";

const date = Intl.DateTimeFormat("bn-bd", {
  dateStyle: "full",
});

function News() {
  const { documents, error, loading } = useGetData("news");
  return (
    <>
      <Location current="News And event" />
      <section className={classes.section}>
        <div className={classes.container}>
          {loading && error === null
            ? "Loading..."
            : documents.map((e) => (
                <Post
                  key={e.id}
                  id={e.id}
                  url={e.url}
                  date={date.format(e.date)}
                  title={e.title}
                  description={e.description}
                />
              ))}
        </div>
      </section>
    </>
  );
}

export default News;
