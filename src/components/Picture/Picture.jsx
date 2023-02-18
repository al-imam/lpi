import classes from "./picture.module.css";
import { useState } from "react";
import { Fullscreen } from "@svg";

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

export default Picture;
