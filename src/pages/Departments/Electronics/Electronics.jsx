import { lazy, useEffect, useState } from "react";
import Loader from "@components/Loader/Loader";

const DepartmentPage = lazy(() =>
  import("@components/DepartmentPage/DepartmentPage")
);

function Electronics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    import("./data").then((v) => setData(v.default));
  }, []);

  return (
    <>
      {data === null ? (
        <Loader />
      ) : (
        <DepartmentPage heading={data.heading} teacher={data.teacher} />
      )}
    </>
  );
}

export default Electronics;
