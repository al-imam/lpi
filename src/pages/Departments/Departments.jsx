import Location from "@components/Location/Location";
import DepartmentGroup from "@components/DepartmentGroup/DepartmentGroup";

function Departments() {
  return (
    <div>
      <Location current="departments" />
      <DepartmentGroup haveTitle={false} />
    </div>
  );
}

export default Departments;
