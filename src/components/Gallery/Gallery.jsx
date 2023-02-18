import classes from "./gallery.module.css";
import Picture from "@components/Picture/Picture";

function Gallery({ pictures, heading }) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.heading}>{heading}</h2>
        <div className={classes.gallery}>
          {pictures.map(({ url }) => (
            <Picture key={url} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
