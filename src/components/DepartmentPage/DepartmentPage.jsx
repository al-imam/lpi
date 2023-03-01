import DepartmentLayout from "@components/DepartmentLayout/DepartmentLayout";
import Location from "@components/Location/Location";
import TeacherGroup from "@components/TeacherGroup/TeacherGroup";

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
