import { lazy, Suspense } from "react";
import Loader from "@components/Loader/Loader";
import data from "./data";

const DepartmentPage = lazy(() =>
  import("@components/DepartmentPage/DepartmentPage")
);

function Architectural() {
  return (
    <Suspense fallback={<Loader />}>
      <DepartmentPage heading={data.heading} teacher={data.teacher} />
    </Suspense>
  );
}

export default Architectural;
