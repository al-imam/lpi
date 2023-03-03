import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "@components/Loader/Loader";

const DepartmentPage = lazy(() =>
  import("@components/DepartmentPage/DepartmentPage")
);

function Architectural() {
  const [data, setData] = useState(null);

  useEffect(() => {
    import("./data").then((v) => setData(v.default));
  }, []);

  return (
    <>
      {data === null ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <DepartmentPage heading={data.heading} teacher={data.teacher} />
        </Suspense>
      )}
    </>
  );
}

export default Architectural;
