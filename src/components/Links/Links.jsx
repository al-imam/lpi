import classes from "./links.module.css";

function Links({ data, font = "bangla" }) {
  return (
    <div className={classes.container + " " + classes[font]}>
      <h2 className={classes.heading}>{data.heading}</h2>
      <ul className={classes.items}>
        {data.links.map((item) => (
          <li>
            <a target="_blank" rel="noopener" href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
