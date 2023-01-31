import DepartmentLayout from "@components/DepartmentLayout/DepartmentLayout";
import Location from "@components/Location/Location";
import TeacherGroup from "@components/TeacherGroup/TeacherGroup";

function DepartmentPage({ heading, teacher }) {
  return (
    <main className="main">
      <Location current="departments" subRoute={heading.subpath} />
      <DepartmentLayout data={heading} />
      {teacher.length !== 0 ? <TeacherGroup teacher={teacher} /> : null}
    </main>
  );
}

export default DepartmentPage;
