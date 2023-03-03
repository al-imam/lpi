import { lazy, Suspense } from "react";

import Location from "@components/Location/Location";
import Loader from "@components/Loader/Loader";

const DepartmentLayout = lazy(() =>
  import("@components/DepartmentLayout/DepartmentLayout")
);
const TeacherGroup = lazy(() =>
  import("@components/TeacherGroup/TeacherGroup")
);

function DepartmentPage({ heading, teacher }) {
  return (
    <main className="main">
      <Location current="departments" subRoute={heading.subpath} />
      <Suspense fallback={<Loader />}>
        <DepartmentLayout data={heading} />
        <TeacherGroup teacher={teacher} />
      </Suspense>
    </main>
  );
}

export default DepartmentPage;
