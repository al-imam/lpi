import Links from "@components/Links/Links";
import data from "./data";

function RecentNotice() {
  return (
    <Links
      text="More Notice"
      data={data}
      page={true}
      fallback="No notice available"
    />
  );
}

export default RecentNotice;
