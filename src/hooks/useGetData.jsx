import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function useGetData(ref) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const id = setTimeout(() => setLoading(false), 2000);
    // return () => clearTimeout(id);

    const local = localStorage.getItem(`firebase-data-${ref}`);
    console.log(JSON.parse(local));

    setLoading(true);

    if (local) {
      setData(JSON.parse(local).data);
      setLoading(false);
      return;
    } else {
      getAndSave();
      return;
    }

    function getAndSave() {
      get().then((data) => {
        setLoading(false);
        setData(data);
        localStorage.setItem(
          `firebase-data-${ref}`,
          JSON.stringify({
            date: Date.now(),
            data: data,
          })
        );
      });
    }

    function get() {
      setLoading(true);
      const db = getFirestore();
      const collectionReference = collection(db, ref);
      const documents = getDocs(collectionReference)
        .then((r) => {
          const posts = r.docs.map((q) => {
            const docs = q.data();
            docs.date = new Date(docs.date.seconds * 1000);
            docs.id = q.id;
            return docs;
          });

          return posts;
        })
        .catch((error) => {
          setLoading(false);
          setError("Something went wrong!");
          console.warn(error);
        })
        .finally(() => setLoading(false));
      return documents;
    }
  }, [ref]);

  return { documents: data, loading, error };
}

export default useGetData;
