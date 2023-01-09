import classes from "./card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <img
        className={classes.cardImg}
        src="/assets/collage.jpg"
        alt="department picture"
      />
      <div className={classes.cardInfo}>
        <h4 className={classes.cardTitle}>Computer science and technology</h4>
        <div class={classes.cardDetails}>
          <a href="#">Faculty of CST</a>
          <span>4 years</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
