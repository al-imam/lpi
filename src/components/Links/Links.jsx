import classes from "./links.module.css";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "@svg";

function Links({
  data,
  font = "bangla",
  link = "#",
  text = "View all",
  page = false,
  fallback = "No Notice Available",
}) {
  const array = [];
  return (
    <div className={classes.container + " " + classes[font]}>
      <h2 className={classes.heading}>{data.heading}</h2>
      {array.length > 0 ? (
        <>
          <ul className={classes.items}>
            {array.map((item) => (
              <li key={JSON.stringify(item)}>
                <Link path={item.link} text={item.text} />
              </li>
            ))}
          </ul>
          {page && (
            <NavLink to={link} className={classes.action}>
              {text} <ArrowRight className={classes.svg} />
            </NavLink>
          )}{" "}
        </>
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}

function Link({ path, text }) {
  if (path.includes("http")) {
    return (
      <a target="_blank" rel="noopener" href={path}>
        {text}
      </a>
    );
  }

  return <NavLink to={path}>{text}</NavLink>;
}

export default Links;
