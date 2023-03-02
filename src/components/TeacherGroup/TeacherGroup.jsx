import classes from "./teacherGroup.module.css";
import { Email, FacebookOutlineIcon } from "@svg";

function TeacherGroup({ teacher }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Teachers</h2>
        <div className={classes.teachers}>
          {teacher.map((t, i) => (
            <TeacherCard
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

function TeacherCard({
  facebook = "#",
  gmail = "#",
  name,
  address,
  src = "#",
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
          <a href={facebook} title={facebook}>
            <FacebookOutlineIcon />
          </a>
          <a href={`mailto:${gmail}`} title={gmail}>
            <Email />
          </a>
        </p>
      </div>
    </div>
  );
}

export default TeacherGroup;
