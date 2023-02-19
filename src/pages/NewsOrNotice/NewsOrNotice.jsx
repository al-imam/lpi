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
          {documents.length === 0 && !loading ? (
            <p className={classes.no}>No {location} available</p>
          ) : (
            <>
              {loading === false &&
                error === null &&
                documents.map((e) => (
                  <Post
                    key={e.id}
                    id={e.id}
                    url={e.url}
                    date={date.format(e.date)}
                    title={e.title}
                    description={e.description}
                  />
                ))}
              {loading && error === null && "Loading......"}
              {error && error}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default NewsOrNotice;
