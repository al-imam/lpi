import Links from "@components/Links/Links";
import array from "./data";

function RecentNotice() {
  return (
    <Links
      text="More Notice"
      heading="Recent notice"
      array={array}
      page={true}
      fallback="No notice available"
    />
  );
}

export default RecentNotice;
