import { useState, useCallback } from "react";
import classes from "./gallery.module.css";
import useOutsideClick from "@hooks/useOutSideClick";
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

  const onClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    console.log("im called", isOpen);
  }, [isOpen]);

  const ref = useOutsideClick(onClick);

  return (
    <div
      ref={ref}
      className={`${classes.imgContainer} ${isOpen ? classes.open : ""}`}
      onClick={() => setIsOpen(true)}
    >
      <img className={classes.img} src={url} />
      <div className={classes.svg}>
        <Fullscreen fontSize="inherit" />
      </div>
    </div>
  );
}
