import style from "./section.module.css";

function Section({ children }) {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
}

export default Section;
