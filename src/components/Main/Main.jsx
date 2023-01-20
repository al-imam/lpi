import classes from "./main.module.css";

function Main() {
  return (
    <div className={classes.content}>
      <div className={classes.card}>
        <div className={classes.cardContainer}>
          <img src="/Non-tech/sir/principal-sir.jpg" />
          <div className={classes.info}>
            <h4>i don't know</h4>
            <span>principal</span>
            <p className={classes.location}>fjghduyguydgh</p>
          </div>
        </div>
      </div>
      <div className="badgescard"></div>
    </div>
  );
}

export default Main;
