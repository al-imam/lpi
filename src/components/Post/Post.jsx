import classes from "./post.module.css";

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postContainer}>
        <div className={classes.image}>
          <p className={classes.title}>Lorem ipsum dolor sit amet.</p>
          <img src="/assets/main.jpg" alt="Post image" />
        </div>
        <p className={classes.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptates praesentium enim. Velit veritatis quasi dicta, omnis eaque
          qui numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odit obcaecati accusantium recusandae aut asperiores magni dignissimos
          error consequatur expedita iusto?
        </p>
      </div>
    </div>
  );
}

export default Post;
