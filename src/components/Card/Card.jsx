import classes from "./card.module.css";
import { NavLink } from "react-router-dom";

function Card({ title, subtitle, src, path }) {
  return (
    <div className={classes.card}>
      <NavLink to={path}>
        <div className={classes.cardImgContainer}>
          <img className={classes.cardImg} src={src} alt="department picture" />
        </div>
        <div className={classes.cardInfo}>
          <h4 className={classes.cardTitle}>{title}</h4>
          <div className={classes.cardDetails}>
            <p>{subtitle}</p>
            <span>4 years</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
