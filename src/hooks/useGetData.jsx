import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function useGetData(ref, validate = 60 * 10 * 1000) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem(`firebase-data-${ref}`));

    setLoading(true);

    if (local) {
      if (local.date < Date.now()) {
        getAndSave();
        return;
      }
      console.log(
        `Fetch will revalidate after ${(
          (local.date - Date.now()) /
          (1000 * 60)
        ).toFixed(2)}min`
      );
      setData(local.data);
      setLoading(false);
      return;
    } else {
      getAndSave();
      return;
    }

    function getAndSave() {
      get().then((data) => {
        console.log(`Fetching ${ref} - ${Date.now() + validate}ms`);
        setLoading(false);
        setData(data);
        localStorage.setItem(
          `firebase-data-${ref}`,
          JSON.stringify({
            date: Date.now() + validate,
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
            docs.date = docs.date.seconds * 1000;
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
