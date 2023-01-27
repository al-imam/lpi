import classes from "./links.module.css";

function Links({ data, font = "bangla" }) {
  return (
    <section className={classes.section + " " + classes[font]}>
      <div className={classes.container}>
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
    </section>
  );
}

export default Links;
