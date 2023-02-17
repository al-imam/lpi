import Post from "@components/Post/Post";
import classes from "./news.module.css";
import Location from "@components/Location/Location";

import { useState, useEffect } from "react";

import { getFirestore, getDocs, collection } from "firebase/firestore";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      const db = getFirestore();
      const cRef = collection(db, "news");
      const querySnapshot = (await getDocs(cRef)).docs;
      const post = querySnapshot.map((q) => ({ ...q.data(), id: q.id }));
      console.log(post);
      setData(post);
    }
    get();
  }, []);

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
          {data.length > 0 &&
            data.map((e) => (
              <Post
                id={e.id}
                url={e.url}
                date={JSON.stringify(
                  new Date(e.date.seconds * 1000).toDateString()
                )}
                title={e.title}
                description={e.description}
              />
            ))}
          {JSON.stringify(data)}
        </div>
      </section>
    </>
  );
}

export default News;
