import Links from "@components/Links/Links";
import useGetData from "@hooks/useGetData";

function News() {
  const { documents, loading } = useGetData("news");
  return (
    <Links
      text="More News"
      heading="News and event"
      array={documents}
      page={true}
      fallback={loading ? "Loading..." : "No news available"}
    />
  );
}

export default News;
