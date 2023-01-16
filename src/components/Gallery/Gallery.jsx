import { useState, useCallback } from "react";
import classes from "./gallery.module.css";
import useOutsideClick from "../../hooks/useOutSideClick";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

function Gallery({ pictures }) {
  return (
    <section className={classes.container}>
      <div className={classes.gallery}>
        {pictures.map(({ url }, index) => (
          <Picture show={index} key={url + Math.random()} url={url} />
        ))}
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
        <FullscreenOutlinedIcon fontSize="inherit" />
      </div>
    </div>
  );
}
