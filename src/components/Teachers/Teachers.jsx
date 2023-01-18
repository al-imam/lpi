import classes from "./teacher.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Teachers() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Teachers</h2>
        <div className={classes.teachers}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className={classes.card}>
      <img style={{ maxWidth: "100%" }} src="/sir/maruf-sir.JPG" alt="" />
      <div className={classes.info}>
        <p>
          <h4>maruf hussein</h4>
          <span>baishmara, lakshmipur</span>
        </p>
        <p className={classes.icons}>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Teachers;
