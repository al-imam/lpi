import Location from "../../components/Location/Location";
import Department from "../../components/Department/Department";

function Departments() {
  return (
    <div>
      <Location current="departments" />
      <Department />
    </div>
  );
}

export default Departments;
