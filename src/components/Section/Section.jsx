import style from "./section.module.css";

function Section({ children }) {
  return (
    <div className={style.container}>
      <section className={style.section}>{children}</section>
    </div>
  );
}

export default Section;
