import classes from "./post.module.css";
import { Download } from "@svg";

function Post() {
  return (
    <div className={classes.post}>
      <p className={classes.title}>
        <p className={classes.text}>Lorem ipsum dolor sit amet.</p>
        <p className={classes.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptates praesentium enim. Velit veritatis quasi dicta, omnis eaque
          qui numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odit obcaecati accusantium recusandae aut asperiores magni dignissimos
          error consequatur expedita iusto?
        </p>
        <time className={classes.time}>{new Date().toDateString()}</time>
      </p>
      <div className={classes.image}>
        <img
          src="https://cbseguides.com/wp-content/uploads/2022/03/Notice-Writing.jpg"
          alt="Post image"
        />
        <a href="/assets/lab.jpg" download={true}>
          <Download />
        </a>
      </div>
    </div>
  );
}

export default Post;
