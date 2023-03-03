import { lazy } from "react";

const Location = lazy(() => import("@components/Location/Location"));

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
      <DepartmentLayout data={heading} />
      <TeacherGroup teacher={teacher} />
    </main>
  );
}

export default DepartmentPage;
