import MailLockIcon from "@mui/icons-material/MailLock";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import RateReviewIcon from "@mui/icons-material/RateReview";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.main}>
      <div className={classes.header}>
        <a className={classes.item} href="/">
          <img className={classes.img} src="/assets/lpi.png" alt="Logo" />{" "}
          Polytechnic
        </a>
        <ul className={classes.items}>
          <li>
            <a href="mailto:alimam01828@gmail.com" className={classes.item}>
              <MailLockIcon /> alimam01828@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+8801881614926" className={classes.item}>
              <PhonelinkLockIcon /> +88-01881-614926
            </a>
          </li>
          <li>
            <a href="/complain" className={classes.item}>
              <RateReviewIcon /> Complain
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
