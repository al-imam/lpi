import DH from "../DH/DH";
import Location from "../Location/Location";
import Teachers from "../Teachers/Teachers";

function TP({ heading, teacher }) {
  return (
    <main className="main">
      <Location current="departments" subRoute={heading.subpath} />
      <DH data={heading} />
      <Teachers teacher={teacher} />
    </main>
  );
}

export default TP;
