import classes from "./teacher.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

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
              gmail={t.gmail}
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
  gmail = "#",
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
        <div>
          <h4>{name}</h4>
          <span>{address}</span>
        </div>
        <p className={classes.icons}>
          <a href={facebook}>
            <FacebookIcon />
          </a>
          <a href={`mailto:${gmail}`}>
            <EmailIcon />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Teachers;
