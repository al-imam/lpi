import Links from "@components/Links/Links";
import useGetData from "@hooks/useGetData";

function RecentNotice() {
  const { documents, loading } = useGetData("notice");
  return (
    <Links
      text="More Notice"
      heading="Recent notice"
      array={documents}
      page={true}
      fallback={loading ? "Loading..." : "No notice available"}
    />
  );
}

export default RecentNotice;
