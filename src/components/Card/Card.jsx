import classes from "./card.module.css";

function Card({ title, subtitle, src }) {
  return (
    <div className={classes.card}>
      <img className={classes.cardImg} src={src} alt="department picture" />
      <div className={classes.cardInfo}>
        <h4 className={classes.cardTitle}>{title}</h4>
        <div class={classes.cardDetails}>
          <a href="#">{subtitle}</a>
          <span>4 years</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
