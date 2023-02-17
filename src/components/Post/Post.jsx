import classes from "./post.module.css";
import { Download } from "@svg";

function Post({
  title = "Lorem ipsum dolor sit amet",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates praesentium enim. Velit veritatis quasi dicta, omnis eaque qui numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit obcaecati accusantium recusandae aut asperiores magni dignissimos error consequatur expedita iusto?",
  date = new Date().toDateString(),
  url = "https://cbseguides.com/wp-content/uploads/2022/03/Notice-Writing.jpg",
  id = null,
}) {
  return (
    <div className={classes.post} id={id}>
      <p className={classes.title}>
        <span className={classes.text}>{title}</span>
        <span className={classes.subtitle}>{description}</span>
        <time className={classes.time}>{date}</time>
      </p>
      {url !== null && (
        <div className={classes.image}>
          <img src={url} alt="Post image" />
          <a href={url} download={true} target="_blank">
            <Download />
          </a>
        </div>
      )}
    </div>
  );
}

export default Post;
