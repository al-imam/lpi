import Links from "@components/Links/Links";
import data from "./data";

function News() {
  return (
    <Links
      text="More News"
      data={data}
      page={true}
      fallback="No news available"
    />
  );
}

export default News;
