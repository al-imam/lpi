import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "@components/Loader/Loader";

const DepartmentPage = lazy(() =>
  import("@components/DepartmentPage/DepartmentPage")
);

function Electrical() {
  const [data, setData] = useState(null);

  useEffect(() => {
    import("./data").then((v) => setData(v.default));
  }, []);

  return (
    <>
      {data === null ? (
        <Loader height="80vh" />
      ) : (
        <Suspense fallback={<Loader height="80vh" />}>
          <DepartmentPage heading={data.heading} teacher={data.teacher} />
        </Suspense>
      )}
    </>
  );
}

export default Electrical;
