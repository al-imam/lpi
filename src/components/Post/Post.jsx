import classes from "./post.module.css";
import { Fullscreen } from "@svg";

function Post({ title, description, date, url, id }) {
  return (
    <div className={classes.post + ` ${url === null && classes.min}`} id={id}>
      <p className={classes.text}>
        <span className={classes.heading}>{title}</span>
        <span className={classes.subtitle}>{description}</span>
        <time className={classes.date}>{date}</time>
      </p>
      {url !== null && (
        <div className={classes.imageContainer}>
          <img className={classes.image} src={url} alt="Post image" />
          <a
            className={classes.download}
            href={url}
            download={true}
            target="_blank"
          >
            <Fullscreen />
          </a>
        </div>
      )}
    </div>
  );
}

export default Post;
