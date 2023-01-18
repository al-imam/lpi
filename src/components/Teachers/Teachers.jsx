import classes from "./teacher.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Teachers({ teacher }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Teachers</h2>
        <div className={classes.teachers}>
          {teacher.map((t, i) => (
            <Card
              name={t.name}
              key={i}
              address={t.title}
              facebook={t.facebook}
              linkedin={t.linkedin}
              src={t.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  facebook = "#",
  linkedin = "#",
  name,
  address,
  src = "/sir/maruf-sir.JPG",
}) {
  return (
    <div className={classes.card}>
      <img
        style={{ maxWidth: "100%" }}
        src={src}
        alt=""
        onError={(evt) => (evt.target.src = "/sir/fallback.jpg")}
      />
      <div className={classes.info}>
        <p>
          <h4>{name}</h4>
          <span>{address}</span>
        </p>
        <p className={classes.icons}>
          <a href={facebook}>
            <FacebookIcon />
          </a>
          <a href={linkedin}>
            <LinkedInIcon />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Teachers;
