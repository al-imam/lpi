import Post from "@components/Post/Post";
import classes from "./newsOrNotice.module.css";
import Location from "@components/Location/Location";
import useGetData from "@hooks/useGetData";

const date = Intl.DateTimeFormat("bn-bd", {
  dateStyle: "full",
});

function NewsOrNotice({ location, collectionRef }) {
  const { documents, error, loading } = useGetData(collectionRef);
  return (
    <>
      <Location current={location} />
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

export default NewsOrNotice;
