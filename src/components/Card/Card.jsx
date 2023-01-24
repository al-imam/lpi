import classes from "./card.module.css";
import { NavLink } from "react-router-dom";

function Card({ title, subtitle, src, path }) {
  return (
    <div className={classes.card}>
      <NavLink to={path}>
        <div className={classes.cardImgContainer}>
          <img className={classes.cardImg} src={src} alt="department picture" />
        </div>
        <h4 className={classes.cardTitle}>{title}</h4>
      </NavLink>
    </div>
  );
}

export default Card;
