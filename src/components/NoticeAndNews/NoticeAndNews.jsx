import RecentNotice from "@components/RecentNotice/RecentNotice";
import News from "@components/News/News";
import classes from "./NoticeAndNews.module.css";

function NoticeAndNews() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* <RecentNotice /> */}
        <News />
      </div>
    </section>
  );
}

export default NoticeAndNews;
