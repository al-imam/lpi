import { useState } from "react";
import classes from "./gallery.module.css";
import { Fullscreen } from "@svg";

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

function Picture({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${classes.imgContainer} ${isOpen ? classes.open : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <img
        onClick={(evt) => {
          evt.stopPropagation();
          setIsOpen(true);
        }}
        className={classes.img}
        src={url}
      />
      <div className={classes.svg}>
        <Fullscreen />
      </div>
    </div>
  );
}
