import DH from "../DH/DH";
import Location from "../Location/Location";
import Teachers from "../Teachers/Teachers";

function TP({ description, name }) {
  return (
    <main className="main">
      <Location current="departments" subRoute="computer" />
      <DH description={description} name={name} />
      <Teachers />
    </main>
  );
}

export default TP;
