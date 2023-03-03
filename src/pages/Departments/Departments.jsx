import { lazy } from "react";
const Location = lazy(() => import("@components/Location/Location"));
const DepartmentGroup = lazy(() =>
  import("@components/DepartmentGroup/DepartmentGroup")
);

function Departments() {
  return (
    <div>
      <Location current="departments" />
      <DepartmentGroup haveTitle={false} />
    </div>
  );
}

export default Departments;
