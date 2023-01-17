import TP from "../../../components/TP/TP";
import data from "./data";

function Computer() {
  return <TP description={data.description} name={data.name} />;
}

export default Computer;
