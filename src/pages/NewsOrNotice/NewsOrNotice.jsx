import { useEffect, lazy } from "react";
const Post = lazy(() => import("@components/Post/Post"));
import classes from "./newsOrNotice.module.css";
const Location = lazy(() => import("@components/Location/Location"));
import useGetData from "@hooks/useGetData";
import { LoadingLoopCircle } from "@svg";
import { useSearchParams } from "react-router-dom";

const date = Intl.DateTimeFormat("bn-bd", {
  dateStyle: "full",
});

function NewsOrNotice({ location, collectionRef }) {
  const { documents, error, loading } = useGetData(collectionRef);
  const [params] = useSearchParams();

  useEffect(() => {
    const id = params.get("item");
    const time = setTimeout(() => {
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      <Location current={location} />
      <section className={classes.section}>
        <div className={classes.container}>
          {documents.length === 0 && !loading ? (
            <p className={classes.no}>No {location.toLowerCase()} available</p>
          ) : (
            <>
              {loading === false &&
                error === null &&
                documents.map((e) => (
                  <Post
                    key={e.id}
                    id={e.id}
                    url={e.url}
                    date={date.format(new Date(e.date))}
                    title={e.title}
                    description={e.description}
                  />
                ))}
              {loading && error === null && (
                <div style={{ textAlign: "center" }}>
                  <LoadingLoopCircle style={{ transform: "scale(2)" }} />
                </div>
              )}
              {error && <p className={classes.no}>{error}</p>}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default NewsOrNotice;
