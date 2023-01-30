import DepartmentLayout from "../DepartmentLayout/DepartmentLayout";
import Location from "../Location/Location";
import TeacherGroup from "../TeacherGroup/TeacherGroup";

function TP({ heading, teacher }) {
  return (
    <main className="main">
      <Location current="departments" subRoute={heading.subpath} />
      <DepartmentLayout data={heading} />
      {teacher.length !== 0 ? <TeacherGroup teacher={teacher} /> : null}
    </main>
  );
}

export default TP;
