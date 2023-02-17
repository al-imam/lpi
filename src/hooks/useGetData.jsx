import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function useGetData(ref) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function get() {
      setLoading(true);
      const db = getFirestore();
      const collectionReference = collection(db, ref);
      try {
        const querySnapshot = (await getDocs(collectionReference)).docs;
        const post = querySnapshot.map((q) => {
          const docs = q.data();
          docs.date = new Date(docs.date.seconds * 1000);
          docs.id = q.id;
          return docs;
        });
        setData(post);

        setLoading(false);
        console.log(post);
      } catch (error) {
        console.warn(error);
        setLoading(false);
        return setError("Something went wrong!");
      }
    }
    get();
  }, [ref]);

  return { documents: data, loading, error };
}

export default useGetData;
