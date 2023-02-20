import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function useGetData(ref) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const id = setTimeout(() => setLoading(false), 2000);
    // return () => clearTimeout(id);

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
  return {
    documents: [
      {
        description:
          'The process of creating a post involves selecting "notice" or "news" type, adding a title and content, and optionally uploading an image. Once all fields are completed, the post can be submitted by clicking the "Submit" button.',
        title: "Second test post ",
        date: new Date("2023-02-18T19:42:16.000Z"),
        url: "https://firebasestorage.googleapis.com/v0/b/image-store-24a40.appspot.com/o/news%2F155098-a12c4d71-03f512f7-def7c981-104d7b22-0d6d629b-?alt=media&token=87f8e177-dbe6-4d7b-b248-3eb68226f32c",
        id: "4vUAjMjrphn7qfoUp750",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/image-store-24a40.appspot.com/o/news%2F89731-539cb2f6-94183260-92c625b7-feee8051-56206c3f-?alt=media&token=b7b5ddfb-eb77-48d5-b421-e72d0d376545",
        date: new Date("2023-02-19T15:06:15.000Z"),
        title: "চতুর্থ পোস্ট",
        description: "রোজা উপলক্ষে কলেজ বন্ধ থাকবে ১২ তারিখ পর্যন্ত ",
        id: "V1MtrYn0zCXYZ2oiakDY",
      },
      {
        date: new Date("2023-02-18T19:46:04.000Z"),
        description:
          'no image in third post\n\nThe process of creating a post involves selecting "notice" or "news" type, adding a title and content, and optionally uploading an image. Once all fields are completed, the post can be submitted by clicking the "Submit" button.',
        url: null,
        title: "Third post",
        id: "ZmzgIeEx30Q8aamTmxGp",
      },
      {
        title: "ghgfhgfghfgh",
        url: "https://firebasestorage.googleapis.com/v0/b/image-store-24a40.appspot.com/o/news%2F41971-a69a4e77-ef7d27d2-3b5488af-4ec504d3-32e5838c-?alt=media&token=4155991a-5b61-496d-80c0-f8e77f0eb8c6",
        date: new Date("2023-02-19T16:25:23.000Z"),
        description:
          'The process of creating a post involves selecting "notice" or "news" type, adding a title and content, and optionally uploading an image. Once all fields are completed, the post can be submitted by clicking the "Submit" button.',
        id: "s6ZHOUXr7XUq6xwkFDTl",
      },
      {
        title: "Test post",
        date: new Date("2023-02-18T18:54:16.000Z"),
        url: "https://firebasestorage.googleapis.com/v0/b/image-store-24a40.appspot.com/o/news%2F3513900-3edcc27a-edaef6a9-2a7fff91-ec47e213-6264ff1a-?alt=media&token=df0080ab-48a4-4a03-99c8-914f74b1b183",
        description:
          'The process of creating a post involves selecting "notice" or "news" type, adding a title and content, and optionally uploading an image. Once all fields are completed, the post can be submitted by clicking the "Submit" button.',
        id: "xQhfx7afdQb8hVCMpfAb",
      },
      {
        date: new Date("2023-02-19T12:28:21.000Z"),
        title: "পোষ্ট ফ্রম মোবাইল ফোন",
        url: "https://firebasestorage.googleapis.com/v0/b/image-store-24a40.appspot.com/o/news%2F164655-769e9cbc-d5f44ebb-8872390c-7d54eb81-0a50dbc0-?alt=media&token=188f22ff-3316-45f8-9199-41afe9243248",
        description:
          "github_pat_1 1AK4SISY056 MtdE5T1qRq_BihW 0vAjLy6bt PsTDY7z1nx IDjbTifVGLqn i3NXt3cE5NB ZTBCz 6wEd8r9",
        id: "zNleZzDSoHZRn2ZSDJeU",
      },
    ],
    loading: loading,
    error: null,
  };
}

export default useGetData;
