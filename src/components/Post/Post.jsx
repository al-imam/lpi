import classes from "./post.module.css";

function Post() {
  return (
    <div className={classes.post}>
      <p className={classes.title}>Lorem ipsum dolor sit amet.</p>
      <div className={classes.postContainer}>
        <p className={classes.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptates praesentium enim. Velit veritatis quasi dicta, omnis eaque
          qui numquam.
        </p>
        <div className={classes.image}>
          <img src="/assets/main.jpg" alt="Post image" />
        </div>
      </div>
    </div>
  );
}

export default Post;
