import { lazy, Suspense } from "react";
import Loader from "../../../components/Loader/Loader";
import data from "./data";

const TP = lazy(() => import("../../../components/TP/TP"));

function Civil() {
  return (
    <Suspense fallback={<Loader />}>
      <TP heading={data.heading} teacher={data.teacher} />
    </Suspense>
  );
}

export default Civil;
