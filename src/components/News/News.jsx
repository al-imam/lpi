import Links from "@components/Links/Links";
import array from "./data";

function News() {
  return (
    <Links
      text="More News"
      heading="News and event"
      array={array}
      page={true}
      fallback="No news available"
    />
  );
}

export default News;
