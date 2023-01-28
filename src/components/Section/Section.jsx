import style from "./section.module.css";

function Section({ children }) {
  return <section className={style.section}>{children}</section>;
}
