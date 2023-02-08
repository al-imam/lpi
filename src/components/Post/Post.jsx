import classes from "./post.module.css";

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postContainer}>
        <p className={classes.title}>Lorem ipsum dolor sit amet.</p>
        <div className={classes.postGroup}>
          <img src="/assets/main.jpg" alt="Post image" />
          <p className={classes.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptates praesentium enim. Velit veritatis quasi dicta, omnis
            eaque qui numquam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Odit obcaecati accusantium recusandae aut
            asperiores magni dignissimos error consequatur expedita iusto?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
